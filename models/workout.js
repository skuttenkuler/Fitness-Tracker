const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //day, default date.now
    day: {
        type: Date,
        default: Date.now()
    },
    excercises: {
        type: Schema.Types.ObjectId,
        ref: "Workout"
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;