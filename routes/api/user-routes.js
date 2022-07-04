const Users = require("../../models/User");











Users.find({}, (err, result) =>{
    if (err) {
        results.status(500).send({message: 'Internal Server Error'});

    }
    else {
        results.status(200).json(result)
    };
});