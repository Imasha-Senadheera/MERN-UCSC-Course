const express = require("express");

var app = express();

app.get("/hello", function (req, res) {
  res.send("Hello Routing!");
});

app.listen(8082);
