const express = require("express");
const privateControllers = require("../controllers/privateControllers");
const router = express.Router();
const articleControllers = require("../controllers/articleControllers");
const userControllers = require("../controllers/userControllers");

const isWriter = require("../middleware/isWriter");
const isAdmin = require("../middleware/isAdmin");

router.get("/logout", privateControllers.logout);

router.get("/admin", isWriter, articleControllers.index);

router.get("/admin/crear", isWriter, articleControllers.create);

router.post("/admin", isWriter, articleControllers.store);

router.get("/admin/editar/:id", isWriter, articleControllers.edit);

router.post("/admin/editar/:id", isWriter, articleControllers.update);

router.get("/admin/eliminar/:id", isWriter, articleControllers.destroy);

// rutas privadas para CRUD de user

router.get("/usuarios", isAdmin, userControllers.showUsers);
router.get("/usuarios/editar/:id", isAdmin, userControllers.showEditUser);
router.post("/usuarios/editar/:id", isAdmin, userControllers.editUser);
router.get("/usuarios/eliminar/:id", isAdmin, userControllers.deleteUser);

module.exports = router;
