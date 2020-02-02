const mongoose = require('mongoose');

const Schema = mongoos.Schema;

const ExcersiceSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

const Excersice = mongoose.model("Exercise", ExcersiceSchema);

module.exports = Excersice;