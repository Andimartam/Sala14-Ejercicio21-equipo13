const { sequelize, Article, User, Comment } = require("../models/index");

async function addComment(req, res) {
  const user = await User.findOne({ where: { mail: req.body.mail } });
  const id = req.params.id;

  await Comment.create({
    content: `${req.body.commentContent}`,
    userId: `${user.id}`,
    articleId: `${req.params.id}`,
    //create_date: `${req.body.create_date}`,
  });
  res.redirect(`/articulos/${id}`);
}

module.exports = { addComment };
