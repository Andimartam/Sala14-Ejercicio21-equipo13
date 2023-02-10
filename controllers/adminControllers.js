const { sequelize, Article } = require("../models/index");

async function index(req, res) {
  const articles = await Article.findAll();
  res.render("admin", { articles });
}

async function create(req, res) {
  /*const articles = await Article.findAll();
    res.render("admin", { articles });*/
}

async function destroy(req, res) {
  /*const articles = await Article.findAll();
    res.render("admin", { articles });*/
}

module.exports = { index };
