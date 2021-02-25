const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/5-fingers-of-marseilles", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "5-fingers-of-marseilles.jpg"));
});
router.get("/vid/5-fingers-of-marseilles", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "5-fingers-of-marseilles.mp4"));
});

router.get("/img/knuckle-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "knuckle-city.jpg"));
});
router.get("/vid/knuckle-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "knuckle-city.mp4"));
});

router.get("/img/moffie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "moffie.jpg"));
});
router.get("/vid/moffie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "moffie.mp4"));
});

router.get("/img/run-hide-fight", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "run-hide-fight.jpg"));
});
router.get("/vid/run-hide-fight", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "run-hide-fight.mp4"));
});

router.get("/img/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "the-hunt.jpg"));
});
router.get("/vid/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/action", "the-hunt.mp4"));
});

module.exports = router; 
