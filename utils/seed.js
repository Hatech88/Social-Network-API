const connection = require("../config/connection");
const { User, Thought } = require("../models");



  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});



  // Create empty array to hold the users
  const Users = [];


//   loop 20 time to add users to the array 