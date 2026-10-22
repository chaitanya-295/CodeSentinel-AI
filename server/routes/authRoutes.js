import express from "express";
import { signup, login } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Current user
router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
});

// Logout
router.post("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
    });

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});

export default router;