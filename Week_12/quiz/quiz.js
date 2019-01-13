var mysql = require ('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',

    user: 'root',
    password: 'Studer2!',
    database: 'quiz'
});

connection.connect(function(err){
    if (err) {
        throw err;
    }
    console.log('connected!')

var q = connection.query("SELECT * FROM breakfast", function(err, res) {
    if (err) {
        throw err;
    }
    console.table(res);
});
console.log(q.sql);
});