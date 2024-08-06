var fs = require("fs");

// Asynchronous read
fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

// This will execute before the file is read
console.log("Program ended");
