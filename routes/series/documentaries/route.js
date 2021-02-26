const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/all-or-nothing-manchester-city.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "all-or-nothing-manchester-city.jpg"));
});
router.get("/all-or-nothing-manchester-city.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "all-or-nothing-manchester-city.mp4"));
});

router.get("/genius-aretha.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "genius-aretha.jpg"));
});
router.get("/genius-aretha.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/documentaries", "genius-aretha.mp4"));
});

module.exports = router; 
