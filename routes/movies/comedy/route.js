const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/an-american-pickle.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "an-american-pickle.jpg"));
});
router.get("/an-american-pickle.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "an-american-pickle.mp4"));
});

router.get("/blessers.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "blessers.jpg"));
});
router.get("/blessers.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "blessers.mp4"));
});

router.get("/kanarie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "kanarie.jpg"));
});
router.get("/kanarie.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "kanarie.mp4"));
});

router.get("/the-banker.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-banker.jpg"));
});
router.get("/the-banker.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-banker.mp4"));
});

router.get("/the-king-of-staten-island.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-king-of-staten-island.jpg"));
});
router.get("/the-king-of-staten-island.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-king-of-staten-island.mp4"));
});


module.exports = router; 
