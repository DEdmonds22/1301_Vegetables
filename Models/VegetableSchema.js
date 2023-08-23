const {Schema, model} = require('mongoose');

const vegetableSchema = new Schema({
    name: {type: String, require: true},
    color: {type: String, require: true},
    readyToEat: Boolean
});

const Vegetable = model('vegetable', vegetableSchema);

module.exports = Vegetable;