const express = require("express");
const pageController = require("../controllers/pagesControllers");
const articleController = require("../controllers/articleControllers");
const router = express.Router();
const isAdmin = require("../middleware/isAdmin");

router.get("/articulos/:id", articleController.show);

router.get("/api/articulos", isAdmin, pageController.showApiArticles);

module.exports = router;
