const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/boity-own-your-throne", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "boity-own-your-throne.jpg"));
});
router.get("/vid/boity-own-your-throne", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "boity-own-your-throne.mp4"));
});

router.get("/img/podcast-and-chill-with-mac-g", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.jpg"));
});
router.get("/vid/podcast-and-chill-with-mac-g", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "podcast-and-chill-with-mac-g.mp4"));
});

router.get("/img/sadboiliftclub", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "sadboiliftclub.jpg"));
});
router.get("/vid/sadboiliftclub", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "sadboiliftclub.mp4"));
});

router.get("/img/the-real-mxo-&-uniey-dreams", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "the-real-mxo-&-uniey-dreams.jpg"));
});
router.get("/vid/the-real-mxo-&-uniey-dreams", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "the-real-mxo-&-uniey-dreams.mp4"));
});

router.get("/img/the-wooden-stool", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "the-wooden-stool.jpg"));
});
router.get("/vid/the-wooden-stool", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/reality", "the-wooden-stool.mp4"));
});

module.exports = router; 
