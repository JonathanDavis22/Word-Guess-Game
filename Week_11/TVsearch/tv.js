var axios = require('axios');
var fs = require('fs');

  var TV = function() {
    this.findShow = function(show) {
    var URL = 'http://api.tvmaze.com/singlesearch/shows?q=' + show;
    axios.get(URL).then(function (response) {
        let json = response.data;
        let showData = [
            'show: ' + json.name,
            'genres: ' + json.genres.join(', '),
            'rating: ' + json.rating.average,
            'network: ' + json.network.name,
            'summary: ' + json.summary
        ].join('\n\n');
        fs.appendFile('log.txt', showData + '\n\n', function(error) {
            if (error) {
                throw error;
            } else {
                console.log(showData);
            }
        })
      });
    };
    this.findActor = function(actor) {
        var URL = 'http://api.tvmaze.com/search/people?q=' + actor;
        axios.get(URL).then(function(response) {
            let json = response.data[0].person;
            let actorData = [
                'Actor: ' + json.name,
                'Birthday: ' + json.birthday,
                'Gender: ' + json.gender,
                'Country: ' + json.country.name,
                'URL: ' + json.url
            ].join('\n\n');
            fs.appendFile('log.txt', actorData + '\n\n', function(error) {
                if (error) {
                    throw error;
                } else {
                    console.log('actorData: ', actorData);
                }
            })
          });
        };
};

module.exports = TV;