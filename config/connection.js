// connect Mangoose 
const mongoose = require('mongoose');

// Wrap Mangoose around local connection 
mangoose.connect('mongodb://127.0.0.1:27017/'nameofdatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export Connection
model,exports = mongoose.connection;





// const { connect, connection, model } = require('mongoose');


// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;



