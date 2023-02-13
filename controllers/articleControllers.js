const { sequelize, Article, User, Comment } = require("../models/index");
const formidable = require("formidable");

//ir a pag admin
async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles });
}

async function show(req, res) {
  const id = req.params.id;
  const articlesById = await Article.findByPk(id);
  const author = await User.findByPk(articlesById.userId);

  const comments = await Comment.findAll({ include: User, where: { articleId: id } });

  res.render("articles", { articlesById, author, comments });
}

//ir a pag crear
async function create(req, res) {
  res.render("form_new");
}

//crear articulo en db
async function store(req, res) {
  const author = await User.findOne({ where: { mail: req.body.mail } });
  await Article.create({
    title: `${req.body.articleTitle}`,
    content: `${req.body.articleContent}`,
    image: "../img/homePhoto.jpg",
    userId: `${author.id}`,
    //create_date: "algo",
  });
  res.redirect("/admin");
}

//ir a pag de edit
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("form_edit", { article });
}

//edita un articulo en db
async function update(req, res) {
  await Article.update(
    {
      title: `${req.body.articleTitle}`,
      content: `${req.body.articleContent}`,
      //create_date: `${req.body.create_date}`,
    },
    {
      where: { id: `${req.params.id}` },
    },
  );
  res.redirect("/admin");
}

//eliminar articulo de la db
async function destroy(req, res) {
  await Article.destroy({ where: { id: `${req.params.id}` } });
  res.redirect("/admin");
}

module.exports = { index, create, store, edit, update, destroy, show };
