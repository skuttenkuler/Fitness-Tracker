const mongoose = require('mongoose');

const Schema = mongoos.Schema;

const WorkoutSchema = new Schema({
    //day, default date.now
    day: {
        type: Date,
        default: Date.now()
    },
    excercises: {
        type: Schema.Types.ObjectId,
        ref: "Excercise"
    }
});

const Workout = mongoose.model("Exercise", WorkoutSchema);

module.exports = Workout;