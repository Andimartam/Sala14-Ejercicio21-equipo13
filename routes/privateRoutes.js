const express = require("express");
const privateControllers = require("../controllers/privateControllers");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const articleController = require("../controllers/articleControllers");
const app = express();
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const isWriter = require("../middleware/isWriter");

app.use(makeUserAvailableInViews);

//app.use(isAuthenticated);

router.get("/logout", privateControllers.logout);

router.get("/admin", isWriter, articleController.index);

router.get("/admin/crear", isWriter, articleController.create);

router.post("/admin", isWriter, articleController.store);

router.get("/admin/editar/:id", isWriter, articleController.edit);

router.post("/admin/editar/:id", isWriter, articleController.update);

router.get("/admin/eliminar/:id", isWriter, articleController.destroy);

module.exports = router;
