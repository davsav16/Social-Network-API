const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //validate email
    }
    // thoughts Array of _id values reverencing Thought model
    // friends array of _id values referencing the user model (self-referencing)
})

const User = model('User', UserSchema);

module.exports = User;