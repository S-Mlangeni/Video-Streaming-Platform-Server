const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/sadboiliftclub.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/banner", "sadboiliftclub.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/banner", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
