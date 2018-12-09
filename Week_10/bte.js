var fs = require('fs');

fs.writeFile('best_things_ever.txt', 'Freedom, Love, Coffee, Acid, Meditation, Music, Not being broke, Boots, Western USA',
    function errorCheck(error) {
        if (error) {
            return console.log(error);
        }
        console.log('best_things_ever.txt was written/updated');
    });

fs.readFile('best_things_ever.txt', 'utf8', function(error, data) {
    console.log(data);
    var dataArray = data.split(',');
    console.log(dataArray);
});


// fs.readFile('best_things_ever.txt', 'utf8', function(error, data) {
//     console.log(data);
//     var dataArray = data.split(',');
//     console.log(dataArray);

// let items = data.split(', ');
// for (let item of items) {
//     console.log(item);
//     }
// });