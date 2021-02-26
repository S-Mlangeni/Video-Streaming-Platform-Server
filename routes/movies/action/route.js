const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/5-fingers-of-marseilles.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "5-fingers-of-marseilles.jpg"));
});
router.get("/5-fingers-of-marseilles.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "5-fingers-of-marseilles.mp4"));
});

router.get("/knuckle-city.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "knuckle-city.jpg"));
});
router.get("/knuckle-city.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "knuckle-city.mp4"));
});

router.get("/moffie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "moffie.jpg"));
});
router.get("/moffie.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "moffie.mp4"));
});

router.get("/run-hide-fight.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "run-hide-fight.jpg"));
});
router.get("/run-hide-fight.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "run-hide-fight.mp4"));
});

router.get("/the-hunt.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "the-hunt.jpg"));
});
router.get("/the-hunt.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "the-hunt.mp4"));
});

module.exports = router; 
