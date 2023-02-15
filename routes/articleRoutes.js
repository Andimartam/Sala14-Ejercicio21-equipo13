const express = require("express");
const pageController = require("../controllers/pagesControllers");
const articleController = require("../controllers/articleControllers");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const app = express();

app.use(makeUserAvailableInViews);

router.get("/articulos/:id", articleController.show);

router.get("/api/articulos", pageController.showApiArticles);

module.exports = router;
