const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
  name: String,
  breed: String,
  isFamilyDog: Boolean
});

const Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;