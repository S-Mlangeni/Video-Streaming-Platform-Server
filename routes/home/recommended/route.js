const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/boity-own-your-throne.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "boity-own-your-throne.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/dave.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "dave.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/moffie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "moffie.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/queen-and-slim.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "queen-and-slim.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/sadboiliftclub.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "sadboiliftclub.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-banker.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "the-banker.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
