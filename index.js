var express = require("express");
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


var database = require("./in-memory-database")();     //exported from contact-card fullstack

database.init([
    {
    item: "cereal",
    brand: "Froot Loops"
},
    {
        item: "candy",
        brand: "Crunch"
    }
]);

// respond with "Hello World!" on the homepage
app.get("/api/", function (req, res) {
    res.send(database.readAll());
});

app.post('/api/', function (req, res) {
    database.create(req.body);
    res.send("success!");
});

app.delete('/api/', function (req, res) {
    var i = 0;
    database.delete(database[i]);
    res.send(database.readAll());
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("App's server listening at http://localhost:%s", port);
});
