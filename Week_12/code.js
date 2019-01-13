var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: 'root',

    password: 'Studer2!',
    database: 'Music_DB'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("connected!")

    var q = connection.query("SELECT * FROM killerTunes WHERE genre = 'Hip hop';", function(err, res) {
        if (err) {
            throw err;
        }
        console.table(res);
    });
    console.log(q.sql)
});

var query = connection.query("INSERT INTO ")