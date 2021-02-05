const express = require("express");
const router = express.Router();
const config = require("config");
const userFunctions = require("../../Functions/userFunctions");

router.post("/", (req, res) => {
  const { name, email, password, retypedPassword, registerType } = req.body;
  console.log(req.body);

  const API_KEY = req.header("API_KEY");

  if (API_KEY !== config.get("API_KEY")) {
    return res.status(401).json({ success: false });
  }

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
    !userFunctions.hasNumber(password)
  ) {
    return res
      .status(400)
      .json({ success: false, msg: "Password is not valid" });
  }

  return res.json({ success: false, msg: "User account has been created" });
});

module.exports = router;
