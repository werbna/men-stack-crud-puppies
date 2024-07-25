const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config ();

mongoose.connect(proncess.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

