const fs = require("fs");

console.log("Start");

fs.readFile("input.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

setImmediate(function () {
  console.log("Immediate callback");
});

console.log("End");
