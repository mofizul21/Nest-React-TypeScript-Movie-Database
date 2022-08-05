import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  description: String,
  author: String,
  date_posted: String,
});
