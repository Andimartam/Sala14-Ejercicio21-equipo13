const express = require("express");
const pageController = require("../controllers/pagesControllers");
const articleController = require("../controllers/articleControllers");
const commentController = require("../controllers/commentControllers");
const router = express.Router();

router.get("/", pageController.index);

router.get("/articulos/:id", articleController.show);

router.post("/articulos/:id", commentController.addComment);

router.get("/admin", articleController.index);

router.get("/admin/crear", articleController.create);

router.post("/admin", articleController.store);

router.get("/admin/editar/:id", articleController.edit);

router.post("/admin/editar/:id", articleController.update);

router.get("/admin/eliminar/:id", articleController.destroy);

router.get("/api/articulos", pageController.showApiArticles);

module.exports = router;
