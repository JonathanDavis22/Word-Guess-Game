// Bring in the "http" module
const http = require("http");

// Choose the port we're listening on
const PORT = 8080;

// This function will be called when the server is ready.
function handleReady() {
    console.log("The server is listening on",`http://localhost:${PORT}`)
}

// This function will be called to handle the request
function handleRequest(request, response) {
    console.log("I'm handling my requests, man.",  request.url);

    response.end("We hear you! You wanted " + request.url);
};

// Create the server object
const server = http.createServer(handleRequest);

// Tell the server to listen on the selected port
server.listen(PORT, handleReady);