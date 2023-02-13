const { sequelize, Article, User, Comment } = require("../models/index");
const formidable = require("formidable");

//ir a pag admin
async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles });
}

//mostrar pag de un art
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
function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const author = await User.findOne({ where: { mail: fields.mail } });
    await Article.create({
      title: fields.articleTitle,
      content: fields.articleContent,
      image: files.image.newFilename,
      userId: author.id,
    });
    res.redirect("/admin");
  });
}

//ir a pag de edit
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("form_edit", { article });
}

//edita un articulo en db
function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Article.update(
      {
        title: fields.articleTitle,
        content: fields.articleContent,
        image: files.image.newFilename,
      },
      {
        where: { id: `${req.params.id}` },
      },
    );
    res.redirect("/admin");
  });
}

//eliminar articulo de la db
async function destroy(req, res) {
  await Article.destroy({ where: { id: `${req.params.id}` } });
  res.redirect("/admin");
}

module.exports = { index, create, store, edit, update, destroy, show };
