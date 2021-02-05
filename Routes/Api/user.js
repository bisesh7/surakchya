const express = require("express");
const router = express.Router();
const config = require("config");

router.post("/", (req, res) => {
  console.log(config.get("API_KEY"));
  console.log(req.body);
});

module.exports = router;
