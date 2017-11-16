var express = require("express");
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

//connecting to database
var pg = require("pg");

var pool = new pg.Pool({
    user: "postgres",
    password: "welcome123",
    host: "localhost",
    port: 5432,
    database: "shopping_list",
    ssl: false
});


//Adding our first route
app.get("/items", function (req, res) {
    pool.query("SELECT * FROM items_table").then(function (result) {
        res.send(result.rows);
    });
});

app.post('/items', function (req, res) {
    var newItem = req.body; // <-- Get the parsed JSON body
    var sql = "INSERT INTO items_table(product, price) " +
      "VALUES ($1::text, $2::numeric)";
    var values = [newItem.product, newItem.price];
  
    pool.query(sql, values).then(function() {
      res.status(201); // 201 Created
      res.send("INSERTED");
    });
});

app.delete('/items', function (req, res) {
    var i = 0;
    database.delete(database[i]);
    res.send(database.readAll());
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("App's server listening at http://localhost:%s", port);
});
