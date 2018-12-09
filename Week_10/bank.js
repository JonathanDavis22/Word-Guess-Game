var fs = require('fs');

var input = parseFloat(process.argv[2]);
var total = 0;
var number;
var activity;

function total() {

    fs.readFile('bank.txt', 'utf8', function (error, data) {
        var output = data.trim().split('total ');

        for (var i = 0; i < output.length; i++);
    });
}

function deposit() {
    total+=input;
}

function withdraw() {
    total-=input;
}

deposit();
withdraw();

fs.appendFile('bank.txt', total, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log(total);
    }
});

// function lotto () {
// }