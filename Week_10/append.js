var fs = require('fs');

fs.appendFile('movies.txt', ', No Country For Old Men, Onibaba', function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('File updated!');
    }
});