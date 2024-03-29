const express = require("express");
const router = express.Router();
const config = require("config");
const userFunctions = require("../../Functions/userFunctions");
const User = require("../../Models/User");
const Hotel = require("../../Models/Hotel");

router.post("/", (req, res) => {
  const API_KEY = req.header("API_KEY");

  if (API_KEY !== config.get("API_KEY")) {
    return res.status(401).json({ success: false });
  }

  const { name, email, password, retypedPassword, registerType } = req.body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof retypedPassword !== "string" ||
    typeof registerType !== "string"
  ) {
    return res.status(400).json({ success: false });
  }

  if (
    !userFunctions.isNotEmpty(name) ||
    !userFunctions.isNotEmpty(email) ||
    !userFunctions.isNotEmpty(password) ||
    !userFunctions.isNotEmpty(retypedPassword) ||
    !userFunctions.isNotEmpty(registerType)
  ) {
    return res
      .status(400)
      .json({ success: false, msg: "Please give all the input" });
  }

  if (!userFunctions.emailIsValid(email)) {
    return res.status(400).json({ success: false, msg: "Email is not valid" });
  }

  if (!userFunctions.isSameStrings(password, retypedPassword)) {
    return res
      .status(400)
      .json({ success: false, msg: "Passwords do not match" });
  }

  if (
    !userFunctions.hasLowerCaseLetter(password) ||
    !userFunctions.hasUpperCaseLetter(password) ||
    !userFunctions.hasNumber(password) ||
    !userFunctions.hasAtLeastEightCharacters(password)
  ) {
    return res
      .status(400)
      .json({ success: false, msg: "Password is not valid" });
  }

  if (registerType === "normal") {
    User.findOne({ email: email.toLowerCase() }).then((user) => {
      if (user) {
        return res.json({
          success: false,
          msg: "User account already exists, please sign in instead.",
        });
      }
      const newUser = new User({
        name,
        email: email.toLowerCase(),
        password,
        confirmed: false,
      });

      userFunctions
        .generateHash(newUser.password)
        .then((hash) => {
          console.log(hash);
          newUser.password = hash;

          newUser.save().then(() => {
            return res.json({
              success: true,
              msg: "User account has been created.",
            });
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    });
  } else {
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
