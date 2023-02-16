const express = require("express");
const commentController = require("../controllers/commentControllers");
const router = express.Router();
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const isEditor = require("../middleware/isEditor");

const app = express();

app.use(makeUserAvailableInViews);

router.post("/articulos/:id", commentController.addComment);
router.get("/articulos/editar-comentario/:id", isEditor, commentController.showEditComment);
router.post("/articulos/editar-comentario/:id", isEditor, commentController.editComment);
router.get("/articulos/eliminar-comentario/:id", isEditor, commentController.deleteComment);

module.exports = router;
