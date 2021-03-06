const mongoose = require('mongoose');

const geoPointSchema = require('./geoPointSchema');
const image = require('./image');

const tea = new mongoose.Schema({
  name: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TeaType',
  },
  translatedNames: [
    {
      name: String,
      language: String,
    },
  ],
  image,
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
  originText: String,
  brewingMethodText: String,
  productionText: String,
  effectText: String,
});

module.exports = tea;
