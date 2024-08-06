const fs = require("fs").promises; // Node.js v10+

// Async function to read a file
async function readFileAsync(path) {
  try {
    console.log("Start reading file...");
    const data = await fs.readFile(path, "utf8");
    console.log(data);
    console.log("File read successfully.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
}

// Call the async function
readFileAsync("input.txt");
