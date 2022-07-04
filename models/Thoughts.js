// model represent a collection in Mongodb and represent a table in SQL

const mongoose = require('mongoose');
const moment  = require('moment');

// ThoughtsSchema
const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Moment
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    // Use ReactionsSchema to validate data
    reactions: [ReactionsSchema]
    },
// toJSON is to return the results in JSON form  and add the virtual property to it
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

// create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);

// Export Thoughts Module
module.exports = Thoughts;
