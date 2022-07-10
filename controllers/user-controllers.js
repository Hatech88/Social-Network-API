// bring the user model same as it was exported 
const { Router } = require('express');
const {Users} = require('../models');


// const newObj = {
// getAllUsers: function (req, res){
//     try {

//     Users.find({})
//     .then((userData) => {
//         return userData
//     })
//     .then((users) => {
//         if(!users){
//             return res.status(404).message({message: 'no users in databasse'})
//         }
//         res.json(users)
//     })
// }
// catch {
//     if (err) console.log(err)
//     res.status(500)
// }
// }

// }



// Set up Users Controller
const usersController = {

    // create a new user 
    createUsers: function (req, res){
        Users.create(req.body)
        .then((usersData) => res.json(usersData))
        .catch((err) => res.status(400).json(err));
    },




    // Get All Users 
    getAllUsers(req, res){
        Users.find({})

        
        // populate users thoughts
        .populate({path: 'thoughts', select: '-__v'})
        // populate user friends
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')


        .then((usersData) => res.json(usersDarta))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },





// get a single user by ID
getUsersById(req, res) {
    Users.findOne({_id: req.params.id})

    .populate({path: 'thoughts', select: '-__v'})
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')

            // return if no user is found 
    .then(usersData => {
        if (!usersData){
            res.status(404).josn({message: "User not found!"})
            return;
        }
        res.josn(usersData)
    })

    .catch(err =>{
        console.log(err);
        res.status(400).json(err)
    })
},





// update user by id
    updateUsers(req, res){
        Users.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(usersData => res.josn(usersData))
        .catch(err => res.status(500).joson(err));
    },




    // delete user 
    deleteUsers(req, res){
        Users.findOneAndDelete({_id: req.params.id})
        .then(usersData => {
            if(!usersData){
                res.status(404).json({message: "No user found with this ID"});
                return;
            }
            res.json(usersData);
        })
        .catch(err => res.status(400).json(err));
    },



    // add a friend 
    addFriend(req, res){
        Users.findOneAndUpdate({_id: req.params.id},{$push:  {friends: params.friendId}},{runValidators: true}, {new: true})
        .then(usersData => {
            if(!usersData){
                res.status(404).json({message: "no User found with this ID!"});
                return;
            }
            res.josn(userData);
        })
        .catch(err => res.json(err));
    },




    // delete a current friend 
deleteFrind(req, res){
    Users.findOneAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}}, {new: true})

    .then((usersData) => {
        if(!usersData) {
            res.status(404).json({message: "No user found with this ID!"})
        }
        res.json(usersData);
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}



}

// Export module users controller
module.exports = usersController; 