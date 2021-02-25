const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/babyteeth", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "babyteeth.jpg"));
});
router.get("/vid/babyteeth", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "babyteeth.mp4"));
});

router.get("/img/i-am-not-a-witch", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "i-am-not-a-witch.jpg"));
});
router.get("/vid/i-am-not-a-witch", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "i-am-not-a-witch.mp4"));
});

router.get("/img/moffie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "moffie.jpg"));
});
router.get("/vid/moffie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "moffie.mp4"));
});

router.get("/img/queen-and-slim", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "queen-and-slim.jpg"));
});
router.get("/vid/queen-and-slim", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "queen-and-slim.mp4"));
});

router.get("/img/rafiki", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "rafiki.jpg"));
});
router.get("/vid/rafiki", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "rafiki.mp4"));
});

router.get("/img/waves", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "waves.jpg"));
});
router.get("/vid/waves", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "waves.mp4"));
});

router.get("/img/young-ahmed", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "young-ahmed.jpg"));
});
router.get("/vid/young-ahmed", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/drama", "young-ahmed.mp4"));
});


module.exports = router; 
