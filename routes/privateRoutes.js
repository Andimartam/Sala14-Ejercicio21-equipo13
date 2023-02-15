const express = require("express");
const privateControllers = require("../controllers/privateControllers");
const router = express.Router();

router.get("/welcome", privateControllers.welcome);

module.exports = router;