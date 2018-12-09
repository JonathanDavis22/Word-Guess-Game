var axios = require('axios');

// axios.get('http://google.com')
//     .then(function(response) {
//         console.log(response);
//     });

axios.get('http://www.omdbapi.com/?t=' + process.argv[2] + '&y=&plot=short&apikey=trilogy').then(
    function(response) {
        console.log("The movie's rating is: " + 
        response.data.imdbRating + ".")
    });