import mongoose, { Schema, Document } from "mongoose";

interface Category extends Document {
  name: string;
  books: string[];
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String },
    books: { type: Array<mongoose.Schema.Types.ObjectId>, ref: "Books" },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<Category>("Category", CategorySchema);
