import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import axios from "axios";

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