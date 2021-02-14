const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({ success: false, msg: "Access denied." });
  }

  jwt.verify(token, config.get("TOKEN_SECRET"), (err, decoded) => {
    if (err) {
      return res.status(400).json({ success: false, msg: "Invalid token." });
    }

    req.user = true;
    console.log(decoded);
    return next();
  });
};
