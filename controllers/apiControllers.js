const { Article, User, Role } = require("../models/index");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

//APIs

async function tokens(req, res) {
  //try {
  const user = await User.findOne({
    include: Role,
    where: { mail: req.body.mail },
  });
  if (user) {
    if (user.role.code < 400) return res.send("No tienes permiso");
    const match = await user.isValidPassword(req.body.password);
    if (match) {
      const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
      return res.json({ token });
    } else {
      return res.send("credenciales incorrectas");
    }
  } else {
    return res.send("No existe el usuario");
  }
  /*} catch (error) {
    return res.send(error);
  }*/
}

//show all articles, search by author and title
async function index(req, res) {
  if (req.query.userId) {
    const articles = await Article.findAll({ include: User, where: { userId: req.query.userId } });
    return res.json(articles);
  } else if (req.query.titulo) {
    const articles = await Article.findAll({
      where: { title: { [Op.substring]: req.query.titulo } },
    });
    return res.json(articles);
  }
  //console.log(req.auth);
  const articles = await Article.findAll({ include: User });
  return res.json(articles);
}

async function store(req, res) {
  try {
    //const author = await User.findOne({ where: { mail: loggedUser.mail } });
    await Article.create({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      userId: req.body.userId,
    });
    const articles = await Article.findAll({ include: User });
    return res.json(articles);
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    return res.send(error);
  }
}

async function update(req, res) {
  try {
    await Article.update(
      {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
      },
      {
        where: { id: `${req.params.id}` },
      },
    );
    const articles = await Article.findAll({ include: User });
    return res.json(articles);
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    return res.send(error);
  }
}

async function destroy(req, res) {
  try {
    await Article.destroy({ where: { id: `${req.params.id}` } });
    const articles = await Article.findAll({ include: User });
    return res.json(articles);
  } catch (error) {
    // If the "try" fails, the "catch" will hand the error, in this case there's one possible error,
    // the try will fail if the email is already registered for another user.
    return res.send(error);
  }
}

module.exports = {
  tokens,
  index,
  store,
  update,
  destroy,
};
