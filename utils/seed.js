const Users = require("../models/User");

Users.create({
  user: 'Test1',
  price: 1
  
},
// Turniry expression 
(err) =>(err? hanfleError(err) : console.log('Created a new User'))

);


module.exports = Users;

