var fs = require('fs');

fs.readFile('bestThings.txt', 'utf8', function(error, data) {
    var output = data.trim().split(', ');

    console.log(output);

    for (var i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
});