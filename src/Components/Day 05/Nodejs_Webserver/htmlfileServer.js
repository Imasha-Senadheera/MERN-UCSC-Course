// Import the required modules
var http = require("http"); // Module to create an HTTP server
var url = require("url"); // Module to parse URL strings
var fs = require("fs"); // Module to interact with the file system

// Create an HTTP server
http
  .createServer(function (req, res) {
    // Parse the request URL to get the pathname
    var pathName = url.parse(req.url).pathname;

    // Remove the leading slash from the pathname to get the file path
    // and read the file from the filesystem
    fs.readFile(pathName.substring(1), function (err, data) {
      // Log the requested file path to the console
      console.log(pathName.substring(1));

      if (err) {
        // If there's an error (e.g., file not found), send a 404 response
        res.writeHead(404, { "Content-Type": "text/html" });
        console.log(err); // Log the error to the console
      } else {
        // If the file is found, send a 200 OK response with the file data
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data); // Write the file content to the response
      }
      // End the response
      res.end();
    });
  })
  .listen(8081); // The server listens on port 8080

// Log a message to the console indicating that the server is running
console.log("server running");
