const router = require('express-router');
const {getAllUsers} = require('../../controllers/user-controllers');

//router use => url router, request Method => functions to use 
router.use('/').get(getAllUsers).post().put().delete()











U