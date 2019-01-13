const http = require("http");

const PORTONE = 7000;
const PORTTWO = 7500;

function handleRequestOne(request, response) {
    response.end(`"Thank you for the tragedy. I need it for my art." -Kurt Cobain`);
};

function handleRequestTwo(request, response) {
    response.end(`"A book must be the axe for the frozen sea within us." -Franz Kafka`);
};

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO);
});