const mongoose = require('mongoose')
const Scema = mongoose.Schema
const user = Scema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('User', user)