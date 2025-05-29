import express from "express";
import {
  applyJob,
  getAllApplications,
  getAppliedJobs,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import { verifyUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/applyJob", verifyUser, applyJob);
router.get("/getAppliedJobs", verifyUser, getAppliedJobs);
router.get("/getAllApplications/:id", verifyUser, getAllApplications);
router.put("/updateApplicationStatus/:id", verifyUser, updateApplicationStatus);

export default router;
