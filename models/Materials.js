const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const materialSchema = new Schema({
    type : {type: String,
        required: true},
    link : {type : String,
            required: true}
})