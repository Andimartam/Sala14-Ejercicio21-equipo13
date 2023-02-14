const { sequelize, Article, User } = require("../models/index");

async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("home", { articles });
}

async function create(req, res) {
  res.render("createUser");
}

async function showApiArticles(req, res) {
  const articles = await Article.findAll({ include: User });
  res.json(articles);
}

async function login(req, res) {
  res.render("login");
}

app.get("/welcome", function (req, res) {
  if (req.isAuthenticated()) {
    res.send(`Te damos la bienvenida, ${req.user.firstname}!!`);
  } else {
    res.redirect("/login");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    //failureFlash: true,
  })
);

module.exports = { index, showApiArticles, create, login };
