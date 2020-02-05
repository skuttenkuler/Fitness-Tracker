# Fitness Tracker Node and MongoDB App for Berekely Bootcamp
Keep track of all your cardio and weightlifting!
## Deployed Link

[Fitness Tracker](https://mysterious-brushlands-78660.herokuapp.com/)

## Demo

![Alt text](./public/images/fittrack.gif?raw=true "Preview")


## Installation

#### Prerequisites
* [NodeJS](https://nodejs.org)
* [MongoDB](https://mongodb.com)

```bash
git clone https://github.com/skuttenkuler/Fitness-Tracker.git

cd Fitness\ Tracker/

npm install

npm start
```

## Code Snippets
Exercise Schema
```javascript
    const ExerciseSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});
```
Workout Schema
```javascript
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
```
Route to create a new workout

```javascript
 //create new workout
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });
```


# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)