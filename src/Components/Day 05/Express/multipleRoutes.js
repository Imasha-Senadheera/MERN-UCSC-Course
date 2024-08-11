const express = require("express");

var app = express();

app.get("/abc", function (req, res) {
  res.send("Get Hello World!");
});

app.post("/abc", function (req, res) {
  res.send("Post method called");
});

app.all("/newabc", function (req, res) {
  res.send("All method called");
});

app.listen(8086, () => {
  console.log("Server for multiple routes is running on http://localhost:8086");
});
