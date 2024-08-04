var http = require('http');

// Create an HTTP server
http.createServer(function(req, res) {
    // Set the response HTTP header with HTTP status code 200 and content type as plain text
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body "Hello world!" and end the response
    res.end('Server is running!');
}).listen(8080); // Listen on port 8080
