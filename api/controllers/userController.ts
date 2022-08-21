import User from "../models/User";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { createError } from "../utils/createError";
import jwt from "jsonwebtoken";
import "dotenv/config";

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
  try {
    await newUser.save();
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
    const user = await User.findOne({ email: req.body.email });
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

    // give a cookie
    res.status(200).json({
      token: token,
      email: user?.email,
      displayName: user?.displayName,
      firstName: user?.firstName,
      lastName: user?.lastName,
      isProvider: user?.isProvider,
      preferredPronouns: user?.preferredPronouns,
      preferredName: user?.preferredName,
      _id: user?._id,
      bio: user?.bio,
      appointments: user?.appointments,
    });
  } catch (error) {
    next(error);
  }
};
