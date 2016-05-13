var _ = require('lodash');
var Dog = require('../models/dog.js');
module.exports = function (app) {
    _dogs = [];

    /* Create */
    app.post('/dog', function (req, res) {
        var newDog = new Dog(req.body);
        newDog.save(function (err) {
            if (err) {
                res.json({info: 'Error during dog create', error: err});
            }
            res.json({info: 'Dog created successfully'});
        });
    });

    /* Read */
    app.get('/dog', function (req, res) {
        Dog.find(function (err, dogs) {
            if (err) {
                res.json({info: 'Error during find dogs', error: err});
            }
            res.json({info: 'Dog found successfully', data: dogs});
        });
    });

    app.get('/dog/:id', function (req, res) {
        Dog.findById(req.params.id, function (err, dog) {
            if (err) {
                res.json({info: 'Error during find dogs', error: err});
            }
            if (dog) {
                res.json({info: 'Dog found successfully', data: dog});
            } else {
                res.json({info: 'Dog not found'});
            }
        });
    });

    /* Update */
    app.put('/dog/:id', function (req, res) {
        Dog.findById(req.params.id, function (err, dog) {
            if (err) {
                res.json({info: 'Error during find dog', error: err});
            }
            ;
            if (dog) {
                _.merge(dog, req.body);
                dog.save(function (err) {
                    if (err) {
                        res.json({info: 'Error during dog update', error: err});
                    }
                    res.json({info: 'Dog updated successfully'});
                });
            } else {
                res.json({info: 'Dog not found'});
            }
        });
    });

    /* Delete */
    app.delete('/dog/:id', function (req, res) {
        Dog.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                res.json({info: 'Error during remove dog', error: err});
            }
            res.json({info: 'Dog removed successfully'});
        });
    });
};