import express from "express";
import { getUserProfile, updateUserProfile } from "../controller/ProfileController.js";
import Authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

// Get user profile
router.get("/", Authenticate, getUserProfile);

// Update user profile
router.put("/", Authenticate, updateUserProfile);

export default router;
