const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/bypass.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "bypass.jpg"));
});
router.get("/bypass.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "bypass.mp4"));
});

router.get("/high-fantasy.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "high-fantasy.jpg"));
});
router.get("/high-fantasy.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "high-fantasy.mp4"));
});

router.get("/the-hunt.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "the-hunt.jpg"));
});
router.get("/the-hunt.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "the-hunt.mp4"));
});

module.exports = router; 
