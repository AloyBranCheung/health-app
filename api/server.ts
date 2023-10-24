import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as trpcExpress from "@trpc/server/adapters/express";
//interfaces
import { Error } from "./types";
// middleware
import withAuth from "./auth/withAuth";
// routes
import userRoute from "./routes/userRoute";
import mrnRoute from "./routes/mrnRoute";
import dashboardRoute from "./routes/dashboardRoute";
import ProfilePicRoute from "./routes/ProfilePicRoute";
// trpc root router
import appRouter from "./trpcRouters/_app";

// express
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
app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);
app.use("/api/user", userRoute);
app.use("/api/mrn", withAuth, mrnRoute);
app.use("/api/dashboard", withAuth, dashboardRoute);
app.use("/api/profilepics", withAuth, ProfilePicRoute);

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

// health check
app.get("/_health", (req, res) => {
  res.send("Hello from the server :)");
});

app.listen(PORT, () => {
  connectToMongoose();
  console.log(`Server started on port ${PORT}.`);
});
