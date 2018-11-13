import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: String,
  src: String,
});

export default imageSchema;
