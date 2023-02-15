const express = require("express");
const privateControllers = require("../controllers/privateControllers");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const articleController = require("../controllers/articleControllers");
const app = express();
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");

app.use(makeUserAvailableInViews);

app.use(isAuthenticated);

router.get("/logout", privateControllers.logout);

router.get("/admin", articleController.index);

router.get("/admin/crear", articleController.create);

router.post("/admin", articleController.store);

router.get("/admin/editar/:id", articleController.edit);

router.post("/admin/editar/:id", articleController.update);

router.get("/admin/eliminar/:id", articleController.destroy);

module.exports = router;