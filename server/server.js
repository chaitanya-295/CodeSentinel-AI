import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

//Database
connectDb();

//Middleware
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use(express.json());

app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.json({
        message: "CodeSentinel API is running",
    });
});

app.use("/api/auth", authRoutes);

// Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});