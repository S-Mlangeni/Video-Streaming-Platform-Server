const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/an-american-pickle.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "an-american-pickle.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/blessers.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "blessers.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/kanarie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "kanarie.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-banker.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-banker.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-king-of-staten-island.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-king-of-staten-island.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});


module.exports = router; 
