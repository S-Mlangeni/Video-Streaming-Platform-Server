const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/bel-air.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "bel-air.jpg"));
});
router.get("/bel-air.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "bel-air.mp4"));
});

router.get("/grownish.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "grownish.jpg"));
});
router.get("/grownish.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "grownish.mp4"));
});

router.get("/high-fantasy.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "high-fantasy.jpg"));
});
router.get("/high-fantasy.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "high-fantasy.mp4"));
});

router.get("/judas-and-the-black-messiah.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "judas-and-the-black-messiah.jpg"));
});
router.get("/judas-and-the-black-messiah.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "judas-and-the-black-messiah.mp4"));
});

router.get("/knuckle-city.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "knuckle-city.jpg"));
});
router.get("/knuckle-city.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "knuckle-city.mp4"));
});

router.get("/podcast-and-chill-with-mac-g.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "podcast-and-chill-with-mac-g.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 