const express = require("express");
const router = express.Router();

// Handle GET requests to /routes/hello
router.get("/hello", function (req, res) {
  res.send("This is GET!");
});

// Handle POST requests to /routes/post
router.post("/", function (req, res) {
  res.send("This is POST!");
});

module.exports = router;
