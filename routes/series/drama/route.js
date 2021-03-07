const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/all-or-nothing-manchester-city.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "all-or-nothing-manchester-city.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/bel-air.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "bel-air.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/euphoria.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "euphoria.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/genius-aretha.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "genius-aretha.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/high-fidelity.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "high-fidelity.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/mr-robot.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "mr-robot.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/drama", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
