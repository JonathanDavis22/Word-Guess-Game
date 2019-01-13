var TV = require('./tv');

var search = process.argv[2];
var term = process.argv.slice(3).join(' ');

var tv = new TV();

if (!search) {
    search = 'show';
} if (!term) {
    term = 'Kyle MacLachlan';
}

if (search === 'show') {
    console.log('Searching for a show');
    tv.findShow(term);
} else if (search === 'actor') {
    console.log('Searching for an actor');
    tv.findActor(term);
} else {
    console.log('Please search for a TV show or actor.')
}

console.log(`${search} ${term}`);