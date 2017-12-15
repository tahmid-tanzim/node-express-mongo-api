const mongoose = require('mongoose');

/* Connection to MongoDB */
const promise = mongoose.createConnection('mongodb://localhost/NetNinja', {
    useMongoClient: true
});

promise.then(function() {
    console.log('Connection Success.');
}).catch(function (error) {
    console.log('Connection Error: ', error);
});