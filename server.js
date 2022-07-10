
// express and mangoose 
const express = require('express');
const mangoose = require('mangoose');

const db = require('./config/connection');
const routes = require('./routes');

const { Users } = require('./models');
const { Thoughts } = require('./models');


app.use(express.static('public'));

// const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// Log mongoose queries
mongoose.set('debug', true);