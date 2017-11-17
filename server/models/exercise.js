var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema ({
    name: String,
    category: String,
    videoUrl: String,
    description: String
})

module.exports = mongoose.model('Exercise', WorkoutSchema)