import {Schema, model} from 'mongoose';

/* Schema */
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

/* Model */
const collection = 'mariochar';
const MarioChar = model(collection, MarioCharSchema);

export default MarioChar;