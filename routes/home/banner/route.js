const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/awkwafina-is-nora-from-queens.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/banner", "awkwafina-is-nora-from-queens.jpg"));
});

router.get("/podcast-and-chill-with-mac-g.mp4", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/banner", "podcast-and-chill-with-mac-g.mp4"));
});

module.exports = router; 