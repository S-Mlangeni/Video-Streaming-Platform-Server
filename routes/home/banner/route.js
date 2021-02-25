const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/awkwafina-is-nora-from-queens", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/banner", "awkwafina-is-nora-from-queens.jpg"));
});

router.get("/vid/awkwafina-is-nora-from-queens", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/home", "/banner", "awkwafina-is-nora-from-queens.mp4"));
});

module.exports = router; 