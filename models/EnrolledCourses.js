const mongoose = require('mongoose');
const Schema = mongoose.Schema

const enrolledCoursesSchema = new Schema ({
    learnerID : {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    courseID : {
        type: Schema.Types.ObjectId,
        ref: 'courses'
    },
    Assessments : [
        {
            assessment : {
                type: Schema.Types.ObjectId,
                ref: 'assessment'
            },
            obtainedMarks : {
                type: Number,
                default: 0
            },
            weightage : {
                type : Number,
                required : true
            },
            averageMarks : {
                type: Number,
                default: 0
            },
            maxMarks : {
                type: Number,
                default: 0
            },
            minMarks : {
                type: Number,
                default: 0
            },
            isCompleted :{
                type : Boolean,
                default: false
            },
            progress : {
                type : Number,
                default: 0
            }
        }
    ],
    materials : [
        {type: Schema.Types.ObjectId,
        ref: 'materials'}
    ]
})
module.exports = mongoose.model('enrolledCourses',enrolledCoursesSchema);