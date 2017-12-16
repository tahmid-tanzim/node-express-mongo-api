const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Schema */
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

/* Model */
const collection = 'mariochar';
const MarioChar = mongoose.model(collection, MarioCharSchema);

module.exports = MarioChar;