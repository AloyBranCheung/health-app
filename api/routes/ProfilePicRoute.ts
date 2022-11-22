import express from "express";
import {
  getPictures,
  inputPictures,
} from "../controllers/ProfilePicsController";

const router = express.Router();

// gets all profile pictures
router.get("/", getPictures);
router.post("/", inputPictures);

export default router;
