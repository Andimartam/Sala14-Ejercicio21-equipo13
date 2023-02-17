const express = require("express");
const privateControllers = require("../controllers/privateControllers");
const router = express.Router();
const articleController = require("../controllers/articleControllers");
const userController = require("../controllers/userControllers");
const isWriter = require("../middleware/isWriter");
const isAdmin = require("../middleware/isAdmin");

router.get("/logout", privateControllers.logout);

router.get("/admin", isWriter, articleController.index);

router.get("/admin/crear", isWriter, articleController.create);

router.post("/admin", isWriter, articleController.store);

router.get("/admin/editar/:id", isWriter, articleController.edit);

router.post("/admin/editar/:id", isWriter, articleController.update);

router.get("/admin/eliminar/:id", isWriter, articleController.destroy);

// rutas privadas para CRUD de user

router.get("/usuarios", isAdmin, userController.showUsers);
router.get("/usuarios/editar/:id", isAdmin, userController.showEditUser);
router.post("/usuarios/editar/:id", isAdmin, userController.editUser);
router.get("/usuarios/eliminar/:id", isAdmin, userController.deleteUser);

module.exports = router;
