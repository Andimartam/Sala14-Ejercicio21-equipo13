const { sequelize, Article, User, Comment } = require("../models/index");
const formidable = require("formidable");

//ir a pag admin
async function index(req, res) {
  if (req.user.roleId > 2) {
    const articles = await Article.findAll({ include: User });
    res.render("admin", { articles });
  } else {
    const loggedUser = req.user;
    const articles = await Article.findAll({ include: User, where: { userId: loggedUser.id } });
    res.render("admin", { articles });
  }
}

//mostrar pag de un art
async function show(req, res) {
  const id = req.params.id;
  const article = await Article.findOne({ include: User, where: { id: id } });
  //const author = await User.findByPk(article.userId);

  const comments = await Comment.findAll({ include: User, where: { articleId: id } });

  res.render("articles", { article, comments });
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
    const loggedUser = req.user;
    const author = await User.findOne({ where: { mail: loggedUser.mail } });
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
  if (req.user.roleId > 2 || req.user.id === article.userId) {
    res.render("form_edit", { article });
  } else {
    res.send("No permission to do this");
  }
}

//edita un articulo en db
async function update(req, res) {
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
  const article = await Article.findByPk(req.params.id);
  if (req.user.roleId > 3 || req.user.id === article.userId) {
    await Article.destroy({ where: { id: `${req.params.id}` } });
    res.redirect("/admin");
  } else {
    res.send("No permission to do this");
  }
}

module.exports = { index, create, store, edit, update, destroy, show };
