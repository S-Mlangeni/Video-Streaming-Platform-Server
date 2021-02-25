const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/all-or-nothing-manchester-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "all-or-nothing-manchester-city.jpg"));
});
router.get("/vid/all-or-nothing-manchester-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "all-or-nothing-manchester-city.mp4"));
});

router.get("/img/genius-aretha", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "genius-aretha.jpg"));
});
router.get("/vid/genius-aretha", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "genius-aretha.mp4"));
});

module.exports = router; 
