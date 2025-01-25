import mongoose, { Schema, Document } from "mongoose";

interface Book extends Document {
  name: string;
  description: string;
  author: string;
  isbn: string;
  isAvailable: boolean;
  price: number;
  image: string;
}

const BookSchema: Schema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    author: { type: String },
    isbn: { type: String },
    isAvailable: { type: Boolean },
    price: { type: Number },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model<Book>("Book", BookSchema);
