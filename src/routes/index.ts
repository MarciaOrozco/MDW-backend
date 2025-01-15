import { Router } from "express";
import usersRouter from "./users.route";
import booksRouter from "./books.route";

const router = Router();

router.use("/users", usersRouter);
router.use("/books", booksRouter);

export default router;
