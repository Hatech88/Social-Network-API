// model represent a collection in Mongodb and represent a table in SQL

const { Schema, model} = require('mongoose');
// const sequalize = require('../config/connection')

// User collection 

const UsersSchema = new Schema({
    // add individual properties and thier types
    // setting required to true will disallow null values 
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
        },

    email: {
        type: String,
        required: true,
        unique: true,
        // // use the reular expression to validate correct email from regex Homework
        //  match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]

    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false

});

// get total count of friends
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create a new instance of the model 
const Users = model('Users', UsersSchema);


// export Users module 
module.exports = Users; 