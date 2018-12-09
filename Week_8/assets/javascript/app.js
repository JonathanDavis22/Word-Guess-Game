  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhZlQfrovRVsIZB2MYyW5Nv07diVRjcp4",
    authDomain: "rps-multiplayer-41b3f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-41b3f.firebaseio.com",
    projectId: "rps-multiplayer-41b3f",
    storageBucket: "",
    messagingSenderId: "775368462750"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();

  
    
        var options = ["r", "p", "s"];
        var wins = 0;
        var losses = 0;
        var ties = 0;

        // This function is run whenever the user presses a key.
        // creates variable called redGuess with value equal to key that has just been released,
        // set that value equal to keycode that has just been released, 
        // take that character, and turn it into a string.
        document.onkeyup = function () {
            var redGuess = String.fromCharCode(event.keyCode).
                toLowerCase();

            var blueGuess = options[Math.floor(Math.random()*options.length)];

        if (redGuess =='r' || redGuess =='p' || redGuess =='s') {
            if ((redGuess=='r') && (blueGuess=='s')) {
                wins++;
            }
            if ((redGuess=='r') && (blueGuess=='p')) {
                losses++;
            }
            if ((redGuess=='s') && (blueGuess=='p')) {
                wins++;
            }
            if ((redGuess=='s') && (blueGuess=='r')) {
                losses++;
            }
            if ((redGuess=='p') && (blueGuess=='r')) {
                wins++;
            }
            if ((redGuess=='p') && (blueGuess=='s')) {
            }
            if ((redGuess==blueGuess)) {
                ties++;
            }
        } else {
            alert("Please choose, r, p, or s.");
        }

        var html = "<p>Press r, p, or s to start playing<p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>ties: " + ties + "</p>";

        document.querySelector('#game').innerHTML = html;
    }