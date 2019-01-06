const mongoose = require('mongoose');
const image = require('./image');

const user = new mongoose.Schema({
  email: String,
  password: String,
  avatar: image,
  firstName: String,
  secondName: String,
  city: String,
  collections: [
    {
      createdAt: Date,
      updatedAt: Date,
      teas: [
        {
          tea: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tea',
          },
          rating: Number,
          comment: String,
          addedAt: Date,
        },
      ],
    },
  ],
  groups: [mongoose.Schema.Types.ObjectId],
  articles: [mongoose.Schema.Types.ObjectId],
});

module.exports = user;
