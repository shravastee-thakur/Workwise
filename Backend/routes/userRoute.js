import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/userController.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/joiValidation.js";
import { verifyUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.post("/logout", logout);
router.put("/updateProfile/:id", verifyUser, updateProfile);

export default router;
