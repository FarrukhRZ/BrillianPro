const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assessmemtSchema = new Schema({
    id : {type : Number,
        required: true},
    type : {type: String,
        required: true},
    number : {type : Number,
        required : true},
    weightage : {type : Number,
        required : true},
    maxMarks : {type: Number,
        required: true},
    obtainedMarks : {type: Number,
        default: 0}
})