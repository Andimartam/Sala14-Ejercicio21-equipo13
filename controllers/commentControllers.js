const { sequelize, Article, User, Comment } = require("../models/index");

async function addComment(req, res) {
  const id = req.params.id;
  const loggedUser = req.user;

  await Comment.create({
    content: `${req.body.commentContent}`,
    userId: `${loggedUser.id}`,
    articleId: `${req.params.id}`,
    //create_date: `${req.body.create_date}`,
  });
  res.redirect(`/articulos/${id}`);
}

module.exports = { addComment };
