const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/family-guy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "family-guy.jpg"));
});
router.get("/vid/family-guy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "family-guy.mp4"));
});

router.get("/img/primal", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "primal.jpg"));
});
router.get("/vid/primal", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "primal.mp4"));
});

router.get("/img/solar-opposites", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "solar-opposites.jpg"));
});
router.get("/vid/solar-opposites", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/animation", "solar-opposites.mp4"));
});

module.exports = router; 
