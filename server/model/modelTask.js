const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    }
});

const Taskdb = mongoose.model('taskdb', taskSchema);
module.exports = Taskdb;