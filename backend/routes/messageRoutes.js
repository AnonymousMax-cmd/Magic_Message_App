const express = require("express");

const router = express.Router();

router.get("/message", (req, res) => {
    res.json({
        message: "Hello Tony starts learning React and Node.js with Mayank Mishra!"
    });
});

module.exports = router;