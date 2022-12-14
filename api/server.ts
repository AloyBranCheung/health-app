import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

//interfaces
import { Error } from "./types";

// routes
import userRoute from "./routes/userRoute";
import mrnRoute from "./routes/mrnRoute";
import dashboardRoute from "./routes/dashboardRoute";
import ProfilePicRoute from "./routes/ProfilePicRoute";

const app = express();
const PORT = process.env.PORT || 3001;

const connectToMongoose = async () => {
  let connection: string;
  if (process.env.MONGO_URL) {
    connection = process.env.MONGO_URL;
  } else {
    throw new Error("MONGO URL env variable not set");
  }

  try {
    await mongoose.connect(connection);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/mrn", mrnRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/profilepics", ProfilePicRoute);

//  error middleware must be at the end
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong :(";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// server listen
app.get("/", (req, res) => {
  res.send("Hello from the server :)");
});

app.listen(PORT, () => {
  connectToMongoose();
  console.log(`Server started on port ${PORT}.`);
});
