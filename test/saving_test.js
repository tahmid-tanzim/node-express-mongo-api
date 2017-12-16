const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving records', function () {
   it('save a record to the database', function (done) {
       let char = new MarioChar({
           name: "Mario"
       });

       char.save()
           .then(function () {
           assert.equal(char.isNew, false);
           done();
       });



   })
});