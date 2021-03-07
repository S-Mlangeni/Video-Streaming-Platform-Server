const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/boity-own-your-throne.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "boity-own-your-throne.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/podcast-and-chill-with-mac-g.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/sadboiliftclub.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "sadboiliftclub.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-real-mxo-&-uniey-dreams.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "the-real-mxo-&-uniey-dreams.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/the-wooden-stool.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "the-wooden-stool.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
