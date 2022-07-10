// // connect Mangoose 
// const { connect, connection, model } = require('mongoose');
// const mongoose = require('mongoose');




// // After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// // Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

// // Connect mongoose
// connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });



// // To make sure your connection was successful

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });



// // Export Connection
// module.exports = connection;





const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;



// To make sure your connection was successful

const db = connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



