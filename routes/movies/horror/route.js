const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/bypass", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "bypass.jpg"));
});
router.get("/vid/bypass", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "bypass.mp4"));
});

router.get("/img/high-fantasy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "high-fantasy.jpg"));
});
router.get("/vid/high-fantasy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "high-fantasy.mp4"));
});

router.get("/img/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "the-hunt.jpg"));
});
router.get("/vid/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/horror", "the-hunt.mp4"));
});

module.exports = router; 
