import { Router } from "express";
import {
  addBook,
  deleteBook,
  editBook,
  getBook,
  getBooks,
} from "../controllers";
import { authMiddleware } from "../middlewares/auth.middlewares";
import {
  addBookValidation,
  editBookValidation,
  deleteBookValidation,
} from "../validations/books.validation";

const router = Router();

router.get("/", getBooks);
router.post("/", authMiddleware, addBookValidation, addBook);
router.get("/:id", getBook);
router.put("/:id", authMiddleware, editBookValidation, editBook);
router.delete("/:id", authMiddleware, deleteBookValidation, deleteBook);

export default router;
