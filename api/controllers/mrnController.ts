import { Request, Response, NextFunction } from "express";
import MRN from "../models/MRN";
import User from "../models/User";

// creates new MRN ID to user ID and then updates User's MRN with MRN Collection ID
export const assignMRN = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const healthInformation = req.body;
  const userId = req.params.userid;
  const newMRN = new MRN({ ...healthInformation });

  try {
    const savedMRN = await newMRN.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $set: { MRN: savedMRN._id },
      });
    } catch (error) {
      next(error);
    }
    res.json(savedMRN);
  } catch (error) {
    next(error);
  }
};

// gets data from userId converted to MRN
export const getInformation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userid;
  try {
    const userInfo = await User.findById(userId);
    const mrn = userInfo?.MRN;
    try {
      const healthInfo = await MRN.findById(mrn);
      res.json(healthInfo);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

// get data using MRN only
export const healthInformationMRN = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mrn = req.params.mrn;
  try {
    const healthInformation = await MRN.findById(mrn);
    res.json(healthInformation);
  } catch (error) {
    next(error);
  }
};

// update health information by userid
export const updateInformation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userid;
  try {
    const userInfo = await User.findById(userId);
    const mrn = userInfo?.MRN;
    try {
      const updatedInformation = await MRN.findByIdAndUpdate(
        mrn,
        {
          $set: req.body,
        },
        { new: true, runValidators: true }
      );
      res.json(updatedInformation);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
