import { Router } from "express";
import {
  addBook,
  deleteBook,
  editBook,
  getBook,
  getBooks,
} from "../controllers";
import { authMiddleware } from "../middlewares/auth.middlewares";

const router = Router();

router.get("/", getBooks);
router.post("/", authMiddleware, addBook);
router.get("/:id", getBook);
router.put("/:id", authMiddleware, editBook);
router.delete("/:id", authMiddleware, deleteBook);

export default router;
