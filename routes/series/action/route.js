const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/power-book-ii-ghost", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "power-book-ii-ghost.jpg"));
});
router.get("/vid/power-book-ii-ghost", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "power-book-ii-ghost.mp4"));
});

router.get("/img/trackers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "trackers.jpg"));
});
router.get("/vid/trackers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "trackers.mp4"));
});

router.get("/img/wandavision", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "wandavision.jpg"));
});
router.get("/vid/wandavision", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "series", "/action", "wandavision.mp4"));
});

module.exports = router; 
