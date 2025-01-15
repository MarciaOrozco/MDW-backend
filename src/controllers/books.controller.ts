import { NextFunction, Request, Response } from "express";
import { Category, Book } from "../models";

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
