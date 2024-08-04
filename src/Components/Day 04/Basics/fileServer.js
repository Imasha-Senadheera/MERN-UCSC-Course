var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {
    // Parse the URL and get the pathname
    var pathName = url.parse(req.url).pathname;

    // Read the file from the filesystem
    fs.readFile(pathName.substring(1), function (err, data) {
        if (err) {
            // If there is an error, respond with 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            console.log(err);
        } else {
            // If the file is found, respond with 200 and serve the file content
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
