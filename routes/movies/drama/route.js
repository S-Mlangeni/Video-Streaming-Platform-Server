const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/babyteeth.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "babyteeth.jpg"));
});
router.get("/babyteeth.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "babyteeth.mp4"));
});

router.get("/i-am-not-a-witch.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "i-am-not-a-witch.jpg"));
});
router.get("/i-am-not-a-witch.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "i-am-not-a-witch.mp4"));
});

router.get("/moffie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "moffie.jpg"));
});
router.get("/moffie.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "moffie.mp4"));
});

router.get("/queen-and-slim.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "queen-and-slim.jpg"));
});
router.get("/queen-and-slim.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "queen-and-slim.mp4"));
});

router.get("/rafiki.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "rafiki.jpg"));
});
router.get("/rafiki.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "rafiki.mp4"));
});

router.get("/waves.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "waves.jpg"));
});
router.get("/waves.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "waves.mp4"));
});

module.exports = router; 
