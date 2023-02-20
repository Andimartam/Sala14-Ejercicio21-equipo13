const { sequelize, Article, User, Comment } = require("../models/index");
const formidable = require("formidable");

//ir a pag admin
async function index(req, res) {
  if (req.user.role.code >= 300) {
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
  const comments = await Comment.findAll({
    include: User,
    where: { articleId: id },
  });

  const users = await User.findAll({ paranoid: false });

  res.render("articles", { article, comments, users });
}

//ir a pag crear
async function create(req, res) {
  res.render("form_new");
}

//crear articulo en db
async function store(req, res) {
  //try {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const loggedUser = req.user;
    try {
      const author = await User.findOne({ where: { mail: loggedUser.mail } });
      await Article.create({
        title: fields.articleTitle,
        content: fields.articleContent,
        image: files.image.newFilename,
        userId: author.id,
      });
      res.redirect("/admin");
    } catch (error) {
      // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
      // the try will fail if the email is already registered for another user.
      res.send(error);
    }
  });
}

//ir a pag de edit
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id);
  if (req.user.role.code >= 300 || req.user.id === article.userId) {
    res.render("form_edit", { article });
  } else {
    res.send("No permission to do this");
  }
}

//edita un articulo en db
async function update(req, res) {
  const article = await Article.findByPk(req.params.id);
  if (req.user.role.code >= 300 || req.user.id === article.userId) {
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
  } else {
    res.send("No permission to do this");
  }
}

//eliminar articulo de la db
async function destroy(req, res) {
  try {
    const article = await Article.findByPk(req.params.id);
    if (req.user.role.code >= 400 || req.user.id === article.userId) {
      await Article.destroy({ where: { id: `${req.params.id}` } });
      res.redirect("/admin");
    } else {
      res.send("No permission to do this");
    }
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    res.send(error);
  }
}

module.exports = { index, create, store, edit, update, destroy, show };
