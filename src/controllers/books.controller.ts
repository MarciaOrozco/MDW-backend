import { NextFunction, Request, Response } from "express";
import { Book, Category } from "../models";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      message: "Books retrieved successfully",
      error: false,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

export const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
        error: true,
        data: undefined,
      });
    }
    return res.status(200).json({
      message: "Book retrieved successfully",
      error: false,
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const addBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, price, image, author, isbn } = req.body;

    if (!name || !description || !price || !author) {
      return res.status(400).json({
        message: "Missing required fields",
        error: true,
        data: undefined,
      });
    }

    const newBook = new Book({
      name,
      description,
      price,
      image: image || "",
      author,
      isbn,
    });

    await newBook.save();

    return res.status(201).json({
      message: "Book created successfully",
      error: false,
      data: newBook,
    });
  } catch (error) {
    next(error);
  }
};

export const editBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
        error: true,
        data: undefined,
      });
    }

    return res.status(200).json({
      message: "Book updated successfully",
      error: false,
      data: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
        error: true,
        data: undefined,
      });
    }

    return res.status(200).json({
      message: "Book deleted successfully",
      error: false,
      data: deletedBook,
    });
  } catch (error) {
    next(error);
  }
};

export const getBooksByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id).populate("books");
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
        error: true,
        data: undefined,
      });
    }
    return res.status(200).json({
      message: "Books retrieved successfully",
      error: false,
      data: category.books,
    });
  } catch (error) {
    next(error);
  }
};
