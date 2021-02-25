const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/knuckle-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/banner", "knuckle-city.jpg"));
});
router.get("/vid/knuckle-city", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/movies", "/banner", "knuckle-city.mp4"));
});

module.exports = router; 
