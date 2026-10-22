const express = require("express");
const cors = require("cors");
require("dotenv").config();

const repositoryRoutes = require("./routes/repository.routes.js");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "CodeSentinel AI API is running"
    });
});

app.use("/api/repositories", repositoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});