const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function (done) {
    /* Connection to MongoDB */
    const promise = mongoose.connect('mongodb://localhost/NetNinja', {
        useMongoClient: true
    });

    promise.then(function() {
        console.log('Connection Success.');
        done();
    }).catch(function (error) {
        console.log('Connection Error: ', error);
        done();
    });
});