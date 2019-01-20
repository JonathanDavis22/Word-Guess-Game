let express = require("express");

let app = express();

let PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Studer2!",
    database: "wishes_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Route get route;
app.get("/", function (req, res) {
    connection.query("SELECT * FROM wishes;", function(err, data) {
        if (err) throw err;

        res.render("index", { wishes: data });
    })
});

app.post("/", function(req, res){
    connection.query("INSERT INTO wishes (wish) VALUES (?)",
    [req.body.wish], function(err, result) {
        if (err) throw err;

        res.redirect("/");
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});