const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/knuckle-city.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/banner", "knuckle-city.jpg"));
});
router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/banner", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 
