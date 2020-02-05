const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //day, default date.now
    day: {
        type: Date,
        default: Date.now()
    },
    excercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    } 
});
//change totalDuration everytime we add a new exercise
WorkoutSchema.post('findOneAndUpdate', (workouts) => {
    //console.log(this)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;