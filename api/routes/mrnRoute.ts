import express from "express";
import {
  assignMRN,
  getInformation,
  updateInformation,
} from "../controllers/mrnController";

const router = express.Router();

router.post("/healthinformation/:userid", assignMRN);
router.get("/healthinformation/:userid", getInformation);
router.put("/healthinformation/:userid", updateInformation);

export default router;
