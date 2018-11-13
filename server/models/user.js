import mongoose from 'mongoose';
import image from './image';

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

export default user;
