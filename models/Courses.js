const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courseSchema = new Schema({
    name : {type: String,
            required: true},
    id : {type: Number,
        required: true},
    instructor : {type : String,
        required: true},
    duration : {type: Number,
        required: true},
    difficulty : {type: Number,
        required: true}
})