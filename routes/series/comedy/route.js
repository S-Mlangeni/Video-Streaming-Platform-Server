const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/awkwafina-is-nora-from-queens", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "awkwafina-is-nora-from-queens.jpg"));
});
router.get("/vid/awkwafina-is-nora-from-queens", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "awkwafina-is-nora-from-queens.mp4"));
});

router.get("/img/dave", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "dave.jpg"));
});
router.get("/vid/dave", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "dave.mp4"));
});

router.get("/img/family-guy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "family-guy.jpg"));
});
router.get("/vid/family-guy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "family-guy.mp4"));
});

router.get("/img/grownish", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "grownish.jpg"));
});
router.get("/vid/grownish", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "grownish.mp4"));
});

router.get("/img/high-fidelity", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "high-fidelity.jpg"));
});
router.get("/vid/high-fidelity", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "high-fidelity.mp4"));
});

router.get("/img/podcast-and-chill-with-mac-g", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.jpg"));
});
router.get("/vid/podcast-and-chill-with-mac-g", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/comedy", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
