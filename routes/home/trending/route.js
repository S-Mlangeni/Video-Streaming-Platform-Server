const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/blessers.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "blessers.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/defining-love.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "defining-love.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/primal.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "primal.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/ramy.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "ramy.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-hunt.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-hunt.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-photograph.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-photograph.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 