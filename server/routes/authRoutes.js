import express from "express";
import { signup, login, githubLogin, githubCallback, forgotPassword, resetPassword, } from "../controllers/authController.js";
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

// GitHub login
router.get("/github", githubLogin);
router.get("/github/callback", githubCallback);

// Forgot password
router.post("/forgot-password", forgotPassword);

// Reset password
router.post("/reset-password/:token", resetPassword);

export default router;