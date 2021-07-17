const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: true
    },
    // reactions: []
})

ThoughtSchema.virtual('thoughtCount').get(function() {
    return this.comments.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;