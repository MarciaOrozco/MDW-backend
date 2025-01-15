import mongoose, { Schema, Document } from "mongoose";

interface Book extends Document {
  name: string;
  description: string;
  author: string;
  isbn: string;
  isActive: boolean;
  image: string;
}

const BookSchema: Schema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    author: { type: String },
    isbn: { type: String },
    isActive: { type: Boolean },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model<Book>("Book", BookSchema);
