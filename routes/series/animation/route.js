const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/family-guy.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "family-guy.jpg"));
});
router.get("/family-guy.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "family-guy.mp4"));
});

router.get("/primal.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "primal.jpg"));
});
router.get("/primal.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "primal.mp4"));
});

router.get("/solar-opposites.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "solar-opposites.jpg"));
});
router.get("/solar-opposites.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "solar-opposites.mp4"));
});

module.exports = router; 
