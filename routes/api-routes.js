//db
const db = require('../models')
//display last workout requires "/api/workouts"
module.exports = (app) => {

    //////Workout Routes//////
    //get all
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        })
    })
}