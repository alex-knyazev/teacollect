const mongoose = require('mongoose');

const tea = new mongoose.Schema({
  name: String,
  translatedNames: [
    {
      name: String,
      language: String,
    },
  ],
});

module.exports = tea;
