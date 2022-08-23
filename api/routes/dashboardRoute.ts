import express from "express";
import { updateUser, getUser } from "../controllers/dashboardController";

const router = express.Router();

router.get("/user/:userid", getUser);
router.put("/updateuser/:userid", updateUser);

export default router;
