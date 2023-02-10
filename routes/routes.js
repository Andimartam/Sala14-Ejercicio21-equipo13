const express = require("express");
//const { sequelize, Article, User, Comment } = require("../models/index");
const homeController = require("../controllers/homeControllers");
const articleController = require("../controllers/articleControllers");
const adminController = require("../controllers/adminControllers");
const router = express.Router();

router.get("/", homeController.index);

router.get("/articulos/:id", articleController.show);

//router.post("/articulos/:id", articleController.addComment);

router.get("/admin", adminController.index);

router.get("/admin/crear", adminController.create);

router.post("/admin", adminController.store);

router.get("/admin/editar/:id", adminController.edit);

router.post("/admin/editar/:id", adminController.update);

router.get("/admin/eliminar/:id", adminController.destroy);

module.exports = router;
