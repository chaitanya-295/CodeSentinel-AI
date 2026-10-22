const express = require("express");

const router = express.Router();

router.post("/analyze", (req, res) => {
    const { repositoryUrl } = req.body;

    if (!repositoryUrl) {
        return res.status(400).json({
            success: false,
            message: "Repository URL is requireed"
        });
    }

    try {
        const url = new URL(repositoryUrl);

        if (url.hostname !== "github.com") {
            return res.status(400).json({
                success: false,
                message: "Only GitHub repositories are supported"
            });
        }

        const parts = url.pathname.split("/").filter(Boolean);

        if (parts.length < 2) {
            return res.status(400).json({
                success: false,
                message: "Invalid Github repository URL"
            });
        }

        const owner = parts[0];
        const repo = parts[1].replace(".git", "");

        return res.json({
            success: true,
            message: "Repository URL is valid",
            repository: {
                owner,
                repo,
                url: `https://github.com/${owner}/${repo}`
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Invalid URL"
        });
    }
});

module.exports = router;