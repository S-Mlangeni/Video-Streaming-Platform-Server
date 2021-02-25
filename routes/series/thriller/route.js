const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/mr-robot", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "mr-robot.jpg"));
});
router.get("/vid/mr-robot", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "mr-robot.mp4"));
});

router.get("/img/power-book-ii-ghost", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "power-book-ii-ghost.jpg"));
});
router.get("/vid/power-book-ii-ghost", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "power-book-ii-ghost.mp4"));
});

router.get("/img/trackers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "trackers.jpg"));
});
router.get("/vid/trackers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "trackers.mp4"));
});

router.get("/img/wandavision", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "wandavision.jpg"));
});
router.get("/vid/wandavision", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "wandavision.mp4"));
});

router.get("/img/your-honor", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "your-honor.jpg"));
});
router.get("/vid/your-honor", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/thriller", "your-honor.mp4"));
});

module.exports = router; 
