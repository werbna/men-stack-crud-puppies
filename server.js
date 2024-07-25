const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config ();

const Puppy = require('./models/puppies.js');

const app = express();
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

//Query Request 

app.get("/", (req,res) => {
  res.render('index.ejs');
})

app.get('/puppies/new', (req,res) => {
  res.render('puppies/new.ejs');
});