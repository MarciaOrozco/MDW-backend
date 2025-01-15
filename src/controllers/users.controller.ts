import { NextFunction, Request, Response } from "express";
import { User } from "../models";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const formattedDate = new Date(req.body.birthDate);
  const { password, ...restBody } = req.body;
  try {
  } catch (error) {
    next(error);
  }
};

export const getUsers = (req: Request, res: Response) => {};

export const getUser = (req: Request, res: Response) => {};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
