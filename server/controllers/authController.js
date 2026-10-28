import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import axios from "axios";
import crypto from "crypto";
import nodemailer from "nodemailer";

// Create JWT
const createToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

// Email Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Signup
export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Check required fields
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check Password Match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        // Check Password Length
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
        }

        // Check existing user
        const existingUser = await User.findOne({
            email: email.toLowerCase(),
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        // Create JWT
        const token = createToken(user._id);

        // Store JWT in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"
                ? "none"
                : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Signup error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // Find user
        const user = await User.findOne({
            email: email.toLowerCase(),
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Create JWT
        const token = createToken(user._id);

        // Store JWT in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"
                ? "none"
                : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Login error: ", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// Redirect user to GitHub
export const githubLogin = (req, res) => {
    const githubAuthUrl =
        `https://github.com/login/oauth/authorize` +
        `?client_id=${process.env.GITHUB_CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(process.env.GITHUB_CALLBACK_URL)}` +
        `&scope=user:email`;

    res.redirect(githubAuthUrl);
};

// GitHub Callback
export const githubCallback = async (req, res) => {
    try {
        const { code } = req.query;

        if (!code) {
            return res.status(400).json({
                message: "GitHub authorization code is missing",
            });
        }

        // 1. Exchange GitHub code for access token
        const tokenResponse = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
                redirect_uri: process.env.GITHUB_CALLBACK_URL,
            },
            {
                headers: {
                    Accept: "application/json",
                },
            }
        );

        const githubAccessToken = tokenResponse.data.access_token;

        if (!githubAccessToken) {
            return res.status(400).json({
                message: "Failed to get GitHub access token",
            });
        }

        // 2. Get GitHub user
        const githubUserResponse = await axios.get(
            "https://api.github.com/user",
            {
                headers: {
                    Authorization: `Bearer ${githubAccessToken}`,
                    Accept: "application/vnd.github+json",
                },
            }
        );

        const githubUser = githubUserResponse.data;

        // 3. Get Github email
        const emailResponse = await axios.get(
            "https://api.github.com/user/emails",
            {
                headers: {
                    Authorization: `Bearer ${githubAccessToken}`,
                    Accept: "application/vnd.github+json",
                },
            }
        );

        const emails = emailResponse.data;

        const primaryEmail = emails.find(
            (email) => email.primary && email.verified
        );

        if (!primaryEmail) {
            return res.status(400).json({
                message: "No verified primary GitHub email was found.",
            });
        }

        const email = primaryEmail.email.toLowerCase();

        // 4. Find existing user
        let user = await User.findOne({
            $or: [
                { githubId: String(githubUser.id) },
                { email },
            ],
        });

        // 5. Create user if they don't exist
        if (!user) {
            user = await User.create({
                name:
                    githubUser.name ||
                    githubUser.login ||
                    "GitHub User",
                email,
                githubId: String(githubUser.id),
                avatar: githubUser.avatar_url,
                authProvider: "github",
            });
        } else {
            // Existing account
            // Link GitHub account if necessary
            if (!user.githubId) {
                user.githubId = String(githubUser.id);
            }

            if (!user.avatar) {
                user.avatar = githubUser.avatar_url;
            }

            await user.save();
        }

        // 6. Create CodeSentinel JWT
        const token = createToken(user._id);

        // 7. Store JWT in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // 8. Redirect back to React
        res.redirect("http://localhost:5173/");
    } catch (error) {
        console.error(
            "GitHub OAuth Error",
            error.response?.data || error.message
        );

        res.redirect(
            "http://localhost:5173/login?error=github_auth_failed"
        );
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select(
            "-password -resetPasswordToken -resetPasswordExpires"
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                authProvider: user.authProvider,
            },
        });
    } catch (error) {
        console.error("Get current user error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// ForgotPassword
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase(),
        });

        // Don't reveal whether an account exists
        if (!user) {
            return res.status(200).json({
                success: true,
                message: "If an account with this email exists, a reset link has been sent.",
            });
        }

        // GitHub user don't have a local password
        if (user.authProvider === "github" && !user.password) {
            return res.status(400).json({
                success: false,
                message: "This account uses GitHub login. Please continue with GitHub.",
            });
        }

        // Generate secure random token
        const resetToken = crypto.randomBytes(32).toString("hex");

        // Store token and expiry in database
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

        await user.save();

        // Reset URL
        const resetUrl = `https://localhost/reset-password/${resetToken}`;

        // Sent email
        await transporter.sendMail({
            from: `"CodeSentinel AI" <${process.env.EMAIL_USER}>`,
            to: user.email,
            subject: "Reset Your CodeSentinel Password",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;>
                    <h2 style="color: #06b6d4;">
                        CodeSentinel AI
                    </h2>

                    <p>
                        Click the button below to create a new password.
                    </p>

                    <a 
                        href="${resetUrl}"
                        style="
                            display: inline-block;
                            padding: 12px 20px;
                            background:#06b6d4;
                            color: white;
                            text-decoration: none;
                            border-radius: 6px;
                        "
                    >
                        Reset Password
                    </a>

                    <p style="margin-top: 20px;">
                        This link will expire in 15 minutes.
                    </p>

                    <p>
                        If you didn't request this, you can safely ignore this email.
                    </p>
                </div>
            `
        });

        res.status(200).json({
            success: true,
            message: "If an account exists with this email, a reset link has been sent.",
        });
    } catch (error) {
        console.error("Forgot password error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to process reset request",
        });
    }
};

// Reset Password
export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password, confirmPassword } = req.body;

        if (!password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password are required.",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password are required.",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password do not match.",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {
                $gt: new Date(),
            },
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Reset link is invalid or expired.",
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        user.password = hashedPassword;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.authProvider = "local";

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully",
        });
    } catch (error) {
        console.error("Reset password error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to reset password",
        });
    }
};