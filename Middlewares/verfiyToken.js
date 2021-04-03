const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.cookies["auth-token"];

  if (!token) {
    return res.status(401).json({ success: false, msg: "Access denied." });
  }
  jwt.verify(token, config.get("TOKEN_SECRET"), (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ success: false, msg: "Invalid token." });
    }

    req.user = decoded._id;
    return next();
  });
};
