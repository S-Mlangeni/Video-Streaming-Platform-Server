const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/all-or-nothing-manchester-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "all-or-nothing-manchester-city.jpg"));
});
router.get("/vid/all-or-nothing-manchester-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "all-or-nothing-manchester-city.mp4"));
});

router.get("/img/bel-air", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "bel-air.jpg"));
});
router.get("/vid/bel-air", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "bel-air.mp4"));
});

router.get("/img/euphoria", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "euphoria.jpg"));
});
router.get("/vid/euphoria", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "euphoria.mp4"));
});

router.get("/img/genius-aretha", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "genius-aretha.jpg"));
});
router.get("/vid/genius-aretha", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "genius-aretha.mp4"));
});

router.get("/img/high-fidelity", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "high-fidelity.jpg"));
});
router.get("/vid/high-fidelity", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "high-fidelity.mp4"));
});

router.get("/img/mr-robot", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "mr-robot.jpg"));
});
router.get("/vid/mr-robot", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "mr-robot.mp4"));
});

router.get("/img/power-book-ii-ghost", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "power-book-ii-ghost.jpg"));
});
router.get("/vid/power-book-ii-ghost", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "power-book-ii-ghost.mp4"));
});

router.get("/img/primal", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "primal.jpg"));
});
router.get("/vid/primal", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "primal.mp4"));
});

router.get("/img/trackers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "trackers.jpg"));
});
router.get("/vid/trackers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "trackers.mp4"));
});

router.get("/img/your-honor", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "your-honor.jpg"));
});
router.get("/vid/your-honor", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "your-honor.mp4"));
});

module.exports = router; 
