import User from "../models/User";
import { Request, Response, NextFunction } from "express";
// get single user
type User = {
  _id: string;
  email: string;
  password: string;
  displayName: string;
  firstName: string;
  lastName: string;
  MRN: string;
  familyMembers: string[];
  isProvider: boolean;
  patientList: string[];
  preferredPronouns: string[];
  preferredName: string;
  bio: string;
  appointments: string[];
  myGoals: string[];
};

// update the user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userid;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userid;
  try {
    const { password, MRN, patientList, ...others } = await User.findById(
      userId
    ).lean<User>();
    res.json(others);
  } catch (error) {
    next(error);
  }
};
