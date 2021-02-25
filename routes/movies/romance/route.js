const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/queen-and-slim", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "queen-and-slim.jpg"));
});
router.get("/vid/queen-and-slim", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "queen-and-slim.mp4"));
});

router.get("/img/rafiki", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "rafiki.jpg"));
});
router.get("/vid/rafiki", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "rafiki.mp4"));
});

router.get("/img/the-photograph", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "the-photograph.jpg"));
});
router.get("/vid/the-photograph", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "the-photograph.mp4"));
});

router.get("/img/waves", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "waves.jpg"));
});
router.get("/vid/waves", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/romance", "waves.mp4"));
});

module.exports = router; 
