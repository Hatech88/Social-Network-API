// model represent a collection in Mongodb and represent a table in SQL

const mongoose = require('mongoose');
const sequalize = require('../config/connection')

// User collection 

const userSchema = new mongoose.Schema({
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
        // use the reular expression to validate correct email from regex Homework
         match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]

    },

    thoughts: {

    },

    friends: {

    }, 
  

});


// create a new instance of the model 
const Users = model('Users', userSchema)


// export Users module 
module.exports = Users; 