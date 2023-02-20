const { sequelize, Article, User } = require("../models/index");

async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("home", { articles });
}

async function create(req, res) {
  if (req.user && req.user.role.code < 400) return res.redirect("/");
  res.render("createUser");
}

async function login(req, res) {
  res.render("login");
}

module.exports = { index, create, login };
