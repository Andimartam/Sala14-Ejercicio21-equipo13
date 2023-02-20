const { sequelize, Article, User, Comment } = require("../models/index");

async function addComment(req, res) {
  const id = req.params.id;
  const loggedUser = req.user;
  try {
    await Comment.create({
      content: `${req.body.commentContent}`,
      userId: `${loggedUser.id}`,
      articleId: `${req.params.id}`,
      //create_date: `${req.body.create_date}`,
    });
    res.redirect(`/articulos/${id}`);
  } catch (error) {
    res.send(error);
  }
}

async function showEditComment(req, res) {
  const comment = await Comment.findByPk(req.params.id);
  res.render("editComment", { comment });
}

async function editComment(req, res) {
  const comment = await Comment.findByPk(req.params.id);
  await Comment.update(
    { content: req.body.commentContent },
    {
      where: { id: `${req.params.id}` },
    },
  );
  res.redirect(`/articulos/${comment.articleId}`);
}

async function deleteComment(req, res) {
  const comment = await Comment.findByPk(req.params.id);

  await Comment.destroy({ where: { id: `${req.params.id}` } });
  res.redirect(`/articulos/${comment.articleId}`);
}

module.exports = { addComment, showEditComment, editComment, deleteComment };
