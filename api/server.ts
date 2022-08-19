import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// server listen
app.get("/", (req, res) => {
  res.send("Hello from the server :)");
});
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
