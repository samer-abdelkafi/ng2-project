import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();
var MongoClient = require('mongodb').MongoClient;
var database;

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/', renderIndex);


var server = app.listen(port, function() {
    var port = server.address().port;
    console.log("This express app is listening on port " + port);
});


MongoClient.connect('mongodb://test:test@ds021761.mlab.com:21761/mydata', function(err, db) {
    if (err) {
        throw err;
    }
    database = db;
});


app.get("/api/users", (req, res) => {
    // Get all registrations
    database.collection('users').find().toArray(function(err, result) {
        if (err) {
            console.log("Can't get users from database : " + err);
            throw err;
        }
        console.log("/api/users result size = " + result.length);
        res.send(result);
    });

});

app.get("/api/users/:id", (req, res) => {
    database.collection('users').findOne( {id : req.params.id} , function(err, item) {
        if (err) {
            console.log("Can't get users from database : " + err);
            throw err;
        }
        console.log("found user :" + JSON.stringify(item));
        res.send(item);
    });

});