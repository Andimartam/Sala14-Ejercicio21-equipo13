const { sequelize, Article, User } = require("../models/index");

async function show(req, res) {
  const articles = await Article.findAll();

  const id = req.params.id;
  const articlesById = await Article.findByPk(id);
  const author = await User.findByPk(articlesById.userId);

  res.render("articles", { articlesById, author });
}

async function addComment(req, res) {
  res.redirect("/articlulos");
}

module.exports = { show, addComment };
