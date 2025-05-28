import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/companyController.js";
import { verifyUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/registerCompany", verifyUser, registerCompany);
router.get("/getCompany", verifyUser, getCompany);
router.get("/getCompanyById/:id", verifyUser, getCompanyById);
router.put("/updateCompany/:id", verifyUser, updateCompany);

export default router;
