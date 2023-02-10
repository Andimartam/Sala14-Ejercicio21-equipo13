const { sequelize, Article } = require("../models/index");

async function index(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

module.exports = { index };
