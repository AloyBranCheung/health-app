import User from "../models/User";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { createError } from "../utils/createError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import MRN from "../models/MRN";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, ...others } = req.body;
  const saltRounds = 10;
  const plainPassword = password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plainPassword, salt);

  const newUser = new User({ ...others, password: hash });
  const newMRN = new MRN();
  try {
    await newUser.save();
    const mrn = await newMRN.save();
    await User.findByIdAndUpdate(newUser._id, { MRN: mrn._id });
    res.send("User registered");
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  const loginPassword = password;
  try {
    // check user is present
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      next(createError(404, "User not found!"));
    }

    // Check password matching
    const dbPassword: string =
      user?.password !== undefined ? user?.password : "";
    const checkPassword = await bcrypt.compare(loginPassword, dbPassword);
    if (!checkPassword) {
      next(createError(401, "Wrong password."));
    }

    // JWT
    const JWTKEY: string =
      process.env.JWTKEY !== undefined ? process.env.JWTKEY : "";

    const token = jwt.sign(
      {
        displayName: user?.displayName,
        firstName: user?.firstName,
        isProvider: user?.isProvider,
      },
      JWTKEY,
      { expiresIn: 900000 }
    );

    res.status(200).json({
      token: token,
      _id: user?._id,
    });
  } catch (error) {
    next(error);
  }
};
