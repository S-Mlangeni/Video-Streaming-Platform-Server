const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/defining-love", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/romance", "defining-love.jpg"));
});
router.get("/vid/defining-love", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/romance", "defining-love.mp4"));
});

router.get("/img/euphoria", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/romance", "euphoria.jpg"));
});
router.get("/vid/euphoria", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/romance", "euphoria.mp4"));
});

router.get("/img/grownish", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/romance", "grownish.jpg"));
});
router.get("/vid/grownish", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/romance", "grownish.mp4"));
});

module.exports = router; 
