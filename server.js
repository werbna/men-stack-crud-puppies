const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config ();
const methodOverride = require('method-override');
const morgan = require('morgan');
// const path = require('path');
const app = express();

const Puppy = require('./models/puppies.js');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
// app.use(express.static(path.join(_dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//Query Request 


// GET Index Page
app.get("/", (req,res) => {
  res.render('index.ejs');
})

//! Index Page Above this.

//GET Puppies New
app.get('/puppies/new', (req,res) => {
  res.render('puppies/new.ejs');
});

//GET ALL puppies list
app.get('/puppies', async (req,res) => {
  const allPuppies = await Puppy.find();
  console.log(allPuppies);
  res.render('puppies/index.ejs', {puppies: allPuppies});
})

app.get('/puppies/:puppyId', async (req, res) => {
  const foundPuppy = await Puppy.findById(req.params.puppyId);
  console.log(foundPuppy)
  res.render('puppies/show.ejs', { puppy: foundPuppy});
})

//POST puppies/new
app.post('/puppies', async (req,res) => {
  if (req.body.isGoodWithChildren === "on") {
    req.body.isGoodWithChildren = true;
  } else {
    req.body.isGoodWithChildren = false;
  }
  await Puppy.create(req.body);
  res.redirect('/puppies/new')
})

//DELETE



app.listen(3000, () => {
  console.log('Listening on port 3000');
});