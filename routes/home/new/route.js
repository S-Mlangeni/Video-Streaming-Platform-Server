const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/bel-air", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "bel-air.jpg"));
});
router.get("/vid/bel-air", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "bel-air.mp4"));
});

router.get("/img/grownish", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "grownish.jpg"));
});
router.get("/vid/grownish", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "grownish.mp4"));
});

router.get("/img/high-fantasy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "high-fantasy.jpg"));
});
router.get("/vid/high-fantasy", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "high-fantasy.mp4"));
});

router.get("/img/judas-and-the-black-messiah", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "judas-and-the-black-messiah.jpg"));
});
router.get("/vid/judas-and-the-black-messiah", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "judas-and-the-black-messiah.mp4"));
});

router.get("/img/knuckle-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "knuckle-city.jpg"));
});
router.get("/vid/knuckle-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "knuckle-city.mp4"));
});

router.get("/img/podcast-and-chill-with-mac-g", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "podcast-and-chill-with-mac-g.jpg"));
});
router.get("/vid/podcast-and-chill-with-mac-g", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/img/soul", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "soul.jpg"));
});
router.get("/vid/soul", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "soul.mp4"));
});

router.get("/img/the-wooden-stool", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "the-wooden-stool.jpg"));
});
router.get("/vid/the-wooden-stool", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/new", "the-wooden-stool.mp4"));
});

module.exports = router; 