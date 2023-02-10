const { sequelize, Article } = require("../models/index");

//ir a pag admin
async function index(req, res) {
  const articles = await Article.findAll();
  res.render("admin", { articles });
}

//ir a pag crear
async function create(req, res) {
  res.render("create-article");
}

//crear articulo en db
async function store(req, res) {
  await Article.create({
    title: `${req.body.title}`,
    content: `${req.body.content}`,
    image: "../img/homePhoto.jpg",
    create_date: "algo",
  });
  res.render("admin");
}

//ir a pag de edit
async function edit(req, res) {
  res.render("edit-article");
}

//edita un articulo en db
async function update(req, res) {
  await Article.update(
    {
      title: `${req.body.title}`,
      content: `${req.body.content}`,
      image: `${req.body.image}`,
      create_date: `${req.body.create_date}`,
    },
    {
      where: { id: `${req.params.id}` },
    },
  );
  res.render("admin");
}

//eliminar articulo de la db
async function destroy(req, res) {
  await Article.destroy({ where: { id: `${req.params.id}` } });
  res.redirect("/admin");
}

module.exports = { index, create, store, edit, update, destroy };
