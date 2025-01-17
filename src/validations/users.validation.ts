import Joi from "joi";
import { NextFunction, Request, Response } from "express";

const createUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  isAdmin: Joi.boolean().default(false),
  birthdate: Joi.date().required(),
});

export const createUserValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = createUserValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const updateUserBodyValidationSchema = Joi.object({
  name: Joi.string().min(3).max(250).optional(),
  lastName: Joi.string().optional(),
  birthDate: Joi.date().optional(),
  email: Joi.string().email().optional(),
  isAdmin: Joi.boolean().optional(),
});

const userParamValidationSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export const updatedUserValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error: bodyError } = updateUserBodyValidationSchema.validate(
    req.body
  );
  const { error: paramError } = userParamValidationSchema.validate(req.params);
  if (paramError || bodyError) {
    return res.status(400).json({
      message: paramError
        ? paramError.details[0].message
        : bodyError?.details[0].message,
      error: true,
    });
  }

  next();
};

export const deleteUserValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userParamValidationSchema.validate(req.params);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
  }

  next();
};
