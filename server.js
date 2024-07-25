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


// GET Index Page
app.get("/", (req,res) => {
  res.render('index.ejs');
})


// GET Puppies New
app.get('/puppies/new', (req,res) => {
  res.render('puppies/new.ejs');
});

//Post puppies/new
app.post('/puppies', async (req,res) => {
  // if (req.body.isGoodWithChildren === "on") {
  //   req.body.isGoodWithChildren = true;
  // } else {
  //   req.body.isGoodWithChildren = false;
  // }
  await Puppy.create(req.body);
  res.redirect('/puppies/new')
})