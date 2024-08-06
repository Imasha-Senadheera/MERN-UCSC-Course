const fs = require("fs");

console.log("Start");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  console.log("File read callback");
});

setImmediate(function () {
  console.log("Immediate callback");
});

console.log("End");
