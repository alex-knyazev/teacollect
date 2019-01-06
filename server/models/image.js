const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  src: String,
});

module.exports = imageSchema;
