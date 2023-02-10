const { sequelize, Article } = require("../models/index");

async function show(req, res) {
  const articles = await Article.findAll();

  const id = req.params.id;
  const articlesById = await Article.findByPk(id);

  res.render("articles", { articlesById, id });
}

module.exports = { show };
