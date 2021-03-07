const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/5-fingers-of-marseilles.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "5-fingers-of-marseilles.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/knuckle-city.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "knuckle-city.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/moffie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "moffie.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/run-hide-fight.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "run-hide-fight.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-hunt.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "the-hunt.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
