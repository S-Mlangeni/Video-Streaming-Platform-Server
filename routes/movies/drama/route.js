const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/babyteeth.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "babyteeth.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/i-am-not-a-witch.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "i-am-not-a-witch.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/moffie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "moffie.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/queen-and-slim.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "queen-and-slim.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/rafiki.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "rafiki.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/waves.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "waves.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
