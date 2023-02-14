const express = require("express");
const commentController = require("../controllers/commentControllers");
const router = express.Router();

router.post("/articulos/:id", commentController.addComment);

module.exports = router;
