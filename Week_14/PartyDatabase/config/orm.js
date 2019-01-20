let connection = require("./connection.js");

/* 
* Console log all the party names.
* Console log all the client names.
* Console log all the parties that have a party-type of grown-up.
* Console log all the clients and their parties.
*/

let orm = {
    select: function(whatToSelect, tableInput) {
        let queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    selectwhere: function()
}