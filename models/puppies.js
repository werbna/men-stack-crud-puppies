const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  breed: {
    type: String,
    required: true, // Breed is required
  },
  coat: {
    type: String,
    enum: ['Short', 'Medium', 'Long', 'Curly'], // Restrict to predefined options
    default: null // Default value is null if not provided
  },
  age: {
    type: Number,
    required: true, // Age is required
    min: 0 // Age cannot be negative
  },
  isGoodWithChildren: {
    type: Boolean,
    default: false // Default value if not specified
  }
});

// Create and export the Puppy model
const Puppy = mongoose.model('Puppy', puppySchema);
module.exports = Puppy;
