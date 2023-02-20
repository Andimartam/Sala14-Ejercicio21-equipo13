const express = require("express");
const articleController = require("../controllers/articleControllers");
const router = express.Router();

router.get("/articulos/:id", articleController.show);

module.exports = router;
