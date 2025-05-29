import express from "express";
import {
  deleteJob,
  getAllJobs,
  getJobById,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import { verifyUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/postJob", verifyUser, postJob);
router.get("/getAllJobs", verifyUser, getAllJobs);
router.get("/getJobById/:id", verifyUser, getJobById);
router.put("/updateJob/:id", verifyUser, updateJob);
router.delete("/deleteJob/:id", verifyUser, deleteJob);

export default router;
