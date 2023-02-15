const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: true
    },
    fullname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)