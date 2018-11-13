import mongoose from 'mongoose';

const tea = new mongoose.Schema({
  name: String,
  translatedNames: [
    {
      name: String,
      language: String,
    },
  ],
});

export default tea;
