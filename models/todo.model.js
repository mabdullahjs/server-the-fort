const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Todos", todoSchema);