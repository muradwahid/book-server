import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  email: { type: String, required: true },
  publicationDate: { type: String, required: true },
  image:{type: String}
})

export const Book=mongoose.model('Book',BookSchema);