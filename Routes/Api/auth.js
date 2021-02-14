const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../../Models/User");
const userFunctions = require("../../Functions/userFunctions");
const Hotel = require("../../Models/Hotel");
const bcrypt = require("bcryptjs");
const verfiyToken = require("../../front/src/Middlewares/verfiyToken");

router.post("/", (req, res) => {
  const API_KEY = req.header("API_KEY");

  if (API_KEY !== config.get("API_KEY")) {
    return res.status(401).json({ success: false, msg: "Login failed." });
  }

  const { email, password, userType } = req.body;

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof userType !== "string"
  ) {
    return res.status(400).json({ success: false, msg: "Login failed" });
  }

  if (
    !userFunctions.isNotEmpty(email) ||
    !userFunctions.isNotEmpty(password) ||
    !userFunctions.isNotEmpty(userType)
  ) {
    return res
      .status(400)
      .json({ success: false, msg: "Please give all the input" });
  }

  if (!userFunctions.emailIsValid(email)) {
    return res.status(400).json({ success: false, msg: "Email is not valid" });
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

  if (userType === "normal") {
    User.findOne({ email: email.toLowerCase() })
      .then((user) => {
        if (!user) {
          return res
            .status(400)
            .json({ success: false, msg: "Invalid credentials." });
        }

        bcrypt.compare(password, user.password).then((valid) => {
          if (!valid) {
            return res
              .status(400)
              .json({ success: false, msg: "Invalid credentials." });
          }

          // Create and assing jwt token.
          jwt.sign(
            { _id: user._id },
            config.get("TOKEN_SECRET"),
            { expiresIn: "1h" },
            function (err, token) {
              if (err) {
                return res.status(500).json({
                  success: false,
                  msg: "Server error while signing jwt",
                });
              }

              // Set cookies of auth token in client side
              try {
                res.cookie("auth-token", token, {
                  httpOnly: true,
                  signed: true,
                  // secure: true // only use https
                });
                return res.json({
                  success: true,
                  msg: "Cookie has been added.",
                });
              } catch (err) {
                return res.status(500).json({
                  success: false,
                  msg: "Server error while setting the cookie.",
                });
              }
            }
          );
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          msg: "Server error while finding the user.",
        });
      });
  } else if (userType === "hotel") {
    Hotel.findOne({ email: email.toLowerCase() })
      .then((hotel) => {
        if (!hotel) {
          return res
            .status(400)
            .json({ success: false, msg: "Invalid credentials." });
        }

        bcrypt.compare(password, hotel.password).then((valid) => {
          if (!valid) {
            return res
              .status(400)
              .json({ success: false, msg: "Invalid credentials." });
          }

          return res.json({ success: true });
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          msg: "Server error while finding the hotel.",
        });
      });
  }
});

router.get("/auth", verfiyToken, (req, res) => {
  return res.json({ success: true });
});

module.exports = router;
