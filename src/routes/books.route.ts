import { Router } from "express";
import {
  addBook,
  deleteBook,
  editBook,
  getBook,
  getBooks,
} from "../controllers";

const router = Router();

router.get("/", getBooks);
router.post("/", addBook);
router.get("/:id", getBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

export default router;
