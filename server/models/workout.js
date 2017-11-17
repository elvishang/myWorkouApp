var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkoutSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    exercise: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
})

module.exports = mongoose.model('Workout', WorkoutSchema)