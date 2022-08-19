import User from "../models/User";
import { Request, Response, NextFunction } from "express";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.send("User registered");
  } catch (error) {
    next(error);
  }
};
