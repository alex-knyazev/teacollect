const mongoose = require('mongoose');

const geoPointSchema = require('./geoPointSchema');

const tea = new mongoose.Schema({
  type: mongoose.Schema.Types.ObjectId,
  name: String,
  translatedNames: [
    {
      name: String,
      language: String,
    },
  ],
  image: {
    title: String,
    src: String,
  },
  birthplace: {
    location: geoPointSchema,
    name: String,
    translatedNames: [
      {
        name: String,
        language: String,
      },
    ],
  },
  brewingTime: [Number],
  brewingAmount: [Number],
  temperature: [Number],
  grams: [Number],
  originText: [Number],
  brewingMethodText: String,
  productionText: String,
  effectText: String,
});

module.exports = tea;
