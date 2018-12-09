var fs = require ('fs');

fs.writeFile('movies.txt', 'Paris Texas, Wild Strawberries, Spirit of the Beehive',
function errorCheck(error) {
    if (error) {
        return console.log(error);
    }
    console.log('movies.txt was written/updated');
})

fs.readFile('movies.txt', 'utf8', function (error, data) {
    console.log(data);
    var dataArray = data.split(',');
    console.log(dataArray);
});