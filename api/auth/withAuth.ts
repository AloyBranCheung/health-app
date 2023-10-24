import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

const withAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split("Bearer")[1].trim() || "";

  if (token && process.env.JWTKEY) {
    try {
      jwt.verify(token, process.env.JWTKEY);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next(new Error("Invalid token"));
  }
};

export default withAuth;
