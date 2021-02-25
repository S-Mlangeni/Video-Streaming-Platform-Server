const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/an-american-pickle", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "an-american-pickle.jpg"));
});
router.get("/vid/an-american-pickle", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "an-american-pickle.mp4"));
});

router.get("/img/blessers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "blessers.jpg"));
});
router.get("/vid/blessers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "blessers.mp4"));
});

router.get("/img/kanarie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "kanarie.jpg"));
});
router.get("/vid/kanarie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "kanarie.mp4"));
});

router.get("/img/the-banker", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-banker.jpg"));
});
router.get("/vid/the-banker", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-banker.mp4"));
});

router.get("/img/the-king-of-staten-island", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-king-of-staten-island.jpg"));
});
router.get("/vid/the-king-of-staten-island", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/comedy", "the-king-of-staten-island.mp4"));
});


module.exports = router; 
