import express from "express";
import {
  updateUser,
  getUser,
  //   removeUser,
} from "../controllers/dashboardController";

const router = express.Router();

router.get("/user/:userid", getUser);
router.put("/updateuser/:userid", updateUser);
// router.delete("/user/:userid", removeUser);

export default router;
