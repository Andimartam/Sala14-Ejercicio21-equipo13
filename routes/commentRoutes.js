const express = require("express");
const commentController = require("../controllers/commentControllers");
const router = express.Router();
const isEditor = require("../middleware/isEditor");
const isReader = require("../middleware/isReader");

router.post("/articulos/:id", isReader, commentController.addComment);
router.get("/articulos/editar-comentario/:id", isEditor, commentController.showEditComment);
router.post("/articulos/editar-comentario/:id", isEditor, commentController.editComment);
router.get("/articulos/eliminar-comentario/:id", isEditor, commentController.deleteComment);

module.exports = router;
