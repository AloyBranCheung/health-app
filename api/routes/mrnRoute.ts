import express from "express";
import {
  assignMRN,
  getInformation,
  healthInformationMRN,
  updateInformation,
} from "../controllers/mrnController";

const router = express.Router();

router.get("/healthinformation/:userid", getInformation);
router.get("/healthinformation/mrn/:mrn", healthInformationMRN);

router.post("/healthinformation/:userid", assignMRN);
router.put("/healthinformation/:userid", updateInformation);

export default router;
