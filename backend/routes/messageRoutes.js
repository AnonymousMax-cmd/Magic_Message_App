const express = require("express");

const router = express.Router();

router.get("/message", (req, res) => {
    res.json({
        message: "Welcome to the Magic Message App!"
    });
});

module.exports = router;