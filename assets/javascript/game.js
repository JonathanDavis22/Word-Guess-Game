// Add losses counter.
//move wins number.

var selectableWords = [
    "mount rainier",
    "georgetown",
    "sodo",
    "capitol hill",
    "fremont",
    "ballard",
    "university district",
    "rainier valley",
    "mount baker",
    "fremont rocket",
    "pike place market",
    "pioneer square",
    "volunteer park",
    "seattle center",
    "amazon spheres",
    "the gum wall",
    "bitter lake",
    "green lake",
    "belltown",
    "orca pod",
    "huskies",
    "seattle great wheel",
    "klondike museum",
    "mopop",
    "burke museum",
    "ballard locks",
    "volunteer park water tower",
    "amazon",
    "microsoft",
    "beacon hill",
    "central district",
    "south lake union",
    "alki point",
    "leschi",
    "montlake",
    "interbay",
    "queen anne",
    "columbia city",
    "first hill",
    "crown hill",
    "westlake",
    "eastlake",
    "downtown seattle",
    "international district",
    "lake washington",
    "lake union",
    "space needle",
    "sound transit",
    "west seattle",
    "alki beach",
    "golden gardens",
    "discovery park",
    "university of washington",
    "smith tower",
    "puget sound",
]

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;

const maxTries = 7;

//Resets/starts the game.
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }

    document.getElementById("pressKeyPlayAgain").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    updateDisplay();
};


//Updates the display...
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if (remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyPlayAgain").style.cssText = "display: block";
        hasFinished = true;
    }
}

//Updates the image depending on how many guesses...
function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "assets/images/hangman.jpg" + (maxTries - remainingGuesses);
};

//Onkey event for user input...
document.onkeydown = function (event) {
    if (hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        } else {
            if (event.keyCode == 32) {
                makeGuess(event.key.toLowerCase());
            }
        }
    }
};

//User letter guesses...
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

//Evaluating user's guess...
function evaluateGuess(letter) {
    var positions = [];
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if (selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
        updateHangmanImage();
    } else {
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyPlayAgain").style.cssText = "display: block";
        wins++;
        hasFinished = true;
    }
};