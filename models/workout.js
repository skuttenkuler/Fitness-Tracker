const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //day, default date.now
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
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
WorkoutSchema.post('findOneAndUpdate', (workout) => {
   
    var totolD = 0;
    //for every exercise(duration) 
    workout.exercises.forEach(({duration}) => {
        //double false check
        if(!isNaN(duration)) {
            //add duration num to totalD
            totolD += parseInt(duration);
        }
    })
    console.log(duration)
    //push to totalWorkout
    workout.totalDuration = totolD + this._update['$push'].exercises.duration;
    return workout.save();
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;