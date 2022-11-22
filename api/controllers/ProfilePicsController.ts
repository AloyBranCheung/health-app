import ProfilePics from "../models/ProfilePics";
import { Request, Response, NextFunction } from "express";

export const getPictures = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allProfilePics = await ProfilePics.find();
  res.send(allProfilePics);
};

export const inputPictures = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newProfilePic = new ProfilePics(req.body);
  try {
    await newProfilePic.save();
    res.send("Picture(s) saved");
  } catch (error) {
    next(error);
  }
};
