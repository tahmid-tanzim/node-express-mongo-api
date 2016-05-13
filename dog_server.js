var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dogRoutes = require('./routes/dog.js')(app);

var server = app.listen(3001, function () {
    console.log('Server: Dog running http://localhost:3001');
});
