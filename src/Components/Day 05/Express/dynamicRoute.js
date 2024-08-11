const express = require("express");
var app = express();

app.get("/:id", function (req, res) {
  res.send("Your id is: " + req.params.id);
});

app.listen(8080);
