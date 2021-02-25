const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/5-fingers-of-marseilles", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "5-fingers-of-marseilles.jpg"));
});
router.get("/vid/5-fingers-of-marseilles", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "5-fingers-of-marseilles.mp4"));
});

router.get("/img/escape-from-pretoria", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "escape-from-pretoria.jpg"));
});
router.get("/vid/escape-from-pretoria", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "escape-from-pretoria.mp4"));
});

router.get("/img/run-hide-fight", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "run-hide-fight.jpg"));
});
router.get("/vid/run-hide-fight", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "run-hide-fight.mp4"));
});

router.get("/img/shirley", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "shirley.jpg"));
});
router.get("/vid/shirley", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "shirley.mp4"));
});

router.get("/img/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "the-hunt.jpg"));
});
router.get("/vid/the-hunt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/thriller", "the-hunt.mp4"));
});

module.exports = router; 
