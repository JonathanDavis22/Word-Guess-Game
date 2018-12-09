// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer.
    prompt ([
        {
        type: "input",
        message: "What is your identifier, sadboy?",
        name: "username"
        },

        {
        type: "password",
        message: "Set your password, dummy.",
        name: "password"
        },

        {
        type: "list",
        message: "Choose your preffered method of death.",
        choices: ["Drowning", "Fire", "Gun", "Fall"],
        name: "death"
        },

        {
        type: "checkbox",
        message: "How would you like to say goodbye?",
        choices: ["Letter", "SMS", "eMail", "Telephone", "In person", "Shouting",],
        name: "communication",
        },

        {
        type: "confirm",
        message: "Are you sure you want to die right now?:",
        name: "confirm",
        default: true
        }
    ])
    .then(function(inquirerResponse) {
        if (inquirerResponse.confirm) {
            console.log("");
            console.log("Welcome " + inquirerResponse.username);
            console.log("Your method of death is: " + inquirerResponse.death + ".");
            console.log("You have chosen " + inquirerResponse.communication + " to tell your loved ones. Goodbye.");
            console.log("");
        }
        else {
            console.log("Good choice, " + inquirerResponse.username + ". Keep on truckin'.")
        }
    });