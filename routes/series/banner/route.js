const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/img/sadboiliftclub", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/banner", "sadboiliftclub.jpg"));
});
router.get("/vid/sadboiliftclub", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../public", "/series", "/banner", "sadboiliftclub.mp4"));
});

module.exports = router; 
