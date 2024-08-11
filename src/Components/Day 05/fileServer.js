// Import the required modules
var http = require("http"); // Module to create an HTTP server
var url = require("url"); // Module to parse URLs
var fs = require("fs"); // Module to interact with the file system

// Create an HTTP server
http
  .createServer(function (req, res) {
    // Parse the request URL to get the pathname
    var pathName = url.parse(req.url).pathname;

    // Read the requested file from the file system
    fs.readFile(pathName.substring(1), function (err, data) {
      // Log the file path (removing the leading slash)
      console.log(pathName.substring(1));

      if (err) {
        // If an error occurs (e.g., file not found), send a 404 response
        res.writeHead(404, { "Content-Type": "text/html" });
        console.log(err); // Log the error
      } else {
        // If the file is found, send a 200 response with the file content
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      // End the response
      res.end();
    });
  })
  .listen(8080); // The server listens on port 8080

// Log that the server is running
console.log("server running");
