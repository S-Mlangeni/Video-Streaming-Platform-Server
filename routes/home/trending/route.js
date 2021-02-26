const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/blessers.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "blessers.jpg"));
});
router.get("/blessers.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "blessers.mp4"));
});

router.get("/defining-love.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "defining-love.jpg"));
});
router.get("/defining-love.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "defining-love.mp4"));
});

router.get("/primal.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "primal.jpg"));
});
router.get("/primal.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "primal.mp4"));
});

router.get("/ramy.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "ramy.jpg"));
});
router.get("/ramy.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "ramy.mp4"));
});

router.get("/the-hunt.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-hunt.jpg"));
});
router.get("/the-hunt.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-hunt.mp4"));
});

router.get("/the-photograph.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-photograph.jpg"));
});
router.get("/the-photograph.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-photograph.mp4"));
});

module.exports = router; 