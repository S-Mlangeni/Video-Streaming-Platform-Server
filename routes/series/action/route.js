const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/power-book-ii-ghost.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "power-book-ii-ghost.jpg"));
});
router.get("/power-book-ii-ghost.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "power-book-ii-ghost.mp4"));
});

router.get("/trackers.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "trackers.jpg"));
});
router.get("/trackers.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "trackers.mp4"));
});

router.get("/wandavision.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "wandavision.jpg"));
});
router.get("/wandavision.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "wandavision.mp4"));
});

module.exports = router; 
