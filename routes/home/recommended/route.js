const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/boity-own-your-throne", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "boity-own-your-throne.jpg"));
});
router.get("/vid/boity-own-your-throne", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "boity-own-your-throne.mp4"));
});

router.get("/img/dave", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "dave.jpg"));
});
router.get("/vid/dave", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "dave.mp4"));
});

router.get("/img/moffie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "moffie.jpg"));
});
router.get("/vid/moffie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "moffie.mp4"));
});

router.get("/img/queen-and-slim", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "queen-and-slim.jpg"));
});
router.get("/vid/queen-and-slim", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "queen-and-slim.mp4"));
});

router.get("/img/sadboiliftclub", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "sadboiliftclub.jpg"));
});
router.get("/vid/sadboiliftclub", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "sadboiliftclub.mp4"));
});

router.get("/img/the-banker", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "the-banker.jpg"));
});
router.get("/vid/the-banker", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "the-banker.mp4"));
});

router.get("/img/wandavision", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "wandavision.jpg"));
});
router.get("/vid/wandavision", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "wandavision.mp4"));
});

router.get("/img/young-ahmed", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "young-ahmed.jpg"));
});
router.get("/vid/young-ahmed", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "home", "/recommended", "young-ahmed.mp4"));
});


module.exports = router; 
