const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        // validate: {
        //     match: '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'
        // }
    },
    // thoughts: [],
    // friends: []
});

const User = model('User', UserSchema);

module.exports = User;

