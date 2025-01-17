import { Router } from "express";
import { getBook, getBooks, getBooksByCategory } from "../controllers";
import { authMiddleware } from "../middlewares/auth.middlewares";

const router = Router();

router.get("/", getBooks);
router.get("/:id", authMiddleware, getBook);
router.get("/category/:id", getBooksByCategory);

export default router;
