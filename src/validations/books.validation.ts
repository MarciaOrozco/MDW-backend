import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const addBookBodyValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  price: Joi.number().required(),
  isbn: Joi.string().required(),
  image: Joi.string().optional(),
  isAvailable: Joi.boolean().optional().default(false),
});

const bookParamValidationSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export const addBookValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = addBookBodyValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
      data: undefined,
    });
  }
  next();
};

export const editBookValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error: bodyError } = addBookBodyValidationSchema.validate(req.body);
  const { error: paramError } = bookParamValidationSchema.validate(req.params);
  if (paramError || bodyError) {
    return res.status(400).json({
      message: paramError
        ? paramError.details[0].message
        : bodyError?.details[0].message,
      error: true,
      data: undefined,
    });
  }
  next();
};

export const deleteBookValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = bookParamValidationSchema.validate(req.params);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
      data: undefined,
    });
  }
  next();
};
