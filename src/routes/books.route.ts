import { Router } from "express";
import { getBook, getBooks, getBooksByCategory } from "../controllers";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.get("/category/:id", getBooksByCategory);

export default router;
