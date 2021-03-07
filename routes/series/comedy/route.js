const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/awkwafina-is-nora-from-queens.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "awkwafina-is-nora-from-queens.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/dave.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "dave.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/family-guy.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "family-guy.jpg"));
});
router.get("/fpodcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "fpodcast-and-chill-with-mac-g.mp4"));
});

router.get("/grownish.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "grownish.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/high-fidelity.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "high-fidelity.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/podcast-and-chill-with-mac-g.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
