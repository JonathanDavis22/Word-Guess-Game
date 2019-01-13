// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 666
var PORT = 666;

// Create our server
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // When we visit different urls, read and respond with different files
    switch (path) {
  
    case "/books":
      return fs.readFile(__dirname + "/books.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    case "/movies":
      return fs.readFile(__dirname + "/movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    case "/cities":
      return fs.readFile(__dirname + "/cities.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
      // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  }