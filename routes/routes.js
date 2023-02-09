const express = require("express");
const { sequelize, Article } = require("../models/index");
//const userController = require("./controllers/userController");
const router = express.Router();

router.get("/", async function (req, res) {
  const articles = await Article.findAll();
  res.json(articles);
});

router.get("/articulos", function (req, res) {
  res.send("Esto es Articulos");
});

router.get("/admin", function (req, res) {
  res.send("Esto es Administrador");
});

router.get("/admin/crear", function (req, res) {
  res.send("ESte es crear");
});

router.post("/admin", function (req, res) {
  res.send("esta es la POST de create");
});

router.get("/admin/editar/:id", function (req, res) {
  res.send("Este es EL GET DE editar");
});

router.post("/admin/editar/:id", function (req, res) {
  res.send("Este es el POST editar");
});

router.get("/admin/eliminar/:id", function (req, res) {
  res.send("Esta es la pagina de eliminar");
});

module.exports = router;
