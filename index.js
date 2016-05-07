var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.json({hello: 'world'});
});

var server = app.listen(3000, function() {
    console.log('Server running http://localhost:3000');
});
