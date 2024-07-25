const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  breed: { type: String, required: true, minlength: 1 },
  isGoodWithChildren: { type: Boolean, default: false }
})


const Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;