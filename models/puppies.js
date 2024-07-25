const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  isGoodWithChildren: { type: Boolean, required: true }
})


const Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;