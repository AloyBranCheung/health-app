import express from "express";
import {
  assignMRN,
  getInformation,
  healthInformationMRN,
  updateInformation,
} from "../controllers/mrnController";

const router = express.Router();

router.get("/healthinformation/:userid", getInformation);
// get data using MRN
router.get("/healthinformation/mrn/:mrn", healthInformationMRN);

router.post("/healthinformation/:userid", assignMRN);

// update health information by userid
router.put("/healthinformation/:userid", updateInformation);

export default router;
