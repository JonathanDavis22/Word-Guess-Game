var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name,
    this.position = position,
    this.offense = offense,
    this.defense = defense,
    this.goodGame = goodGame,
    this.badGame = badGame,
    this.goodGame = function() {
        if (Math.round(Math.random) === 1) {this.offense++
        console.log(`${this.name}'s offense has gone up!\n`)}
        else {this.defense++;
        console.log(`${this.name}'s defense has gone up!\n`)};
    },
    this.badGame = function() {
        if (Math.round(Math.random) === 1) {this.offense--
            console.log(`${this.name}'s offense has gone down!\n`)}
            else {this.defense--;
            console.log(`${this.name}'s defense has gone down!\n`)};
    },
    this.printStats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense " + this.offense + "\nDefense: " + this.defense);
    }
}

var teamArray = [];

var createPlayer = function() {
    if (count < 3) {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            },
            {
                name: "position",
                message: "What is your position?"
            },
            {
                type: "list",
                name: "Offense",
                choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                message: "Input offense score"
            },
            {
                type: "list",
                name: "Defense",
                choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                message: "Input defense score"
            }
        ]).then(function(answers) {
            var newPlayer = new Player(
                player.name,
                player.position,
                player.offense,
                player.defense);
            teamArray.push(newPlayer);
            count++;
            createPlayer();
        })
    } else {
        for (v
    }
}

goodGame();
badGame();
printStats();