const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/blessers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "blessers.jpg"));
});
router.get("/vid/blessers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "blessers.mp4"));
});

router.get("/img/defining-love", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "defining-love.jpg"));
});
router.get("/vid/defining-love", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "defining-love.mp4"));
});

router.get("/img/primal", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "primal.jpg"));
});
router.get("/vid/primal", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "primal.mp4"));
});

router.get("/img/ramy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "ramy.jpg"));
});
router.get("/vid/ramy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "ramy.mp4"));
});

router.get("/img/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-hunt.jpg"));
});
router.get("/vid/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-hunt.mp4"));
});

router.get("/img/the-photograph", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-photograph.jpg"));
});
router.get("/vid/the-photograph", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-photograph.mp4"));
});

router.get("/img/the-real-mxo-&-uniey-dreams", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-real-mxo-&-uniey-dreams.jpg"));
});
router.get("/vid/the-real-mxo-&-uniey-dreams", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "the-real-mxo-&-uniey-dreams.mp4"));
});

router.get("/img/waves", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "waves.jpg"));
});
router.get("/vid/waves", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/trending", "waves.mp4"));
});

module.exports = router; 