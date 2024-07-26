const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config ();
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const app = express();
const puppiesCTRL = require('./controllers/puppies');

const Puppy = require('./models/puppies.js');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//GET Index Page
app.get('/', puppiesCTRL.index);

//GET Puppies New
app.get('/puppies/new', puppiesCTRL.newPuppy);

//GET All Puppies List
app.get('/puppies', puppiesCTRL.allPuppies);

//GET Single Puppy
app.get('/puppies/:puppyId', puppiesCTRL.puppy);

//POST New Puppy
app.post('/puppies', puppiesCTRL.create);

//DELETE Puppy
app.delete('/puppies/:puppyId', puppiesCTRL.delete);

//GET Edit Puppy Form
app.get('/puppies/:puppyId/edit', puppiesCTRL.edit);

//PUT Update Puppy
app.put('/puppies/:puppyId', puppiesCTRL.update);


app.listen(3000, () => {
  console.log('Listening on port 3000');
});