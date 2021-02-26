const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/boity-own-your-throne.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "boity-own-your-throne.jpg"));
});
router.get("/boity-own-your-throne.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "boity-own-your-throne.mp4"));
});

router.get("/dave.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "dave.jpg"));
});
router.get("/dave.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "dave.mp4"));
});

router.get("/moffie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "moffie.jpg"));
});
router.get("/moffie.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "moffie.mp4"));
});

router.get("/queen-and-slim.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "queen-and-slim.jpg"));
});
router.get("/queen-and-slim.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "queen-and-slim.mp4"));
});

router.get("/sadboiliftclub.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "sadboiliftclub.jpg"));
});
router.get("/sadboiliftclub.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "sadboiliftclub.mp4"));
});

router.get("/the-banker.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "the-banker.jpg"));
});
router.get("/the-banker.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "the-banker.mp4"));
});

module.exports = router; 
