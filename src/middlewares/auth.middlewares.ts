import { NextFunction, Request, Response } from "express";
import firebaseApp from "../config/firebase";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "Provide a token", error: true });
    }

    if (!authorization.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Invalid token format", error: true });
    }

    const token = authorization.split(" ")[1];

    const user = await firebaseApp.auth().verifyIdToken(token);

    res.locals.userId = user._id;

    next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.errorInfo.code === "auth/argument-error") {
      next("Provide a token");
    }
    if (error.errorInfo.code === "auth/id-token-expired") {
      next("Token has expired");
    }
    next(error.message);
  }
};
