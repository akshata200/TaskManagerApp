const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Taskdb = require('./modelTask')

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});


schema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = undefined;
    next();
})

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;