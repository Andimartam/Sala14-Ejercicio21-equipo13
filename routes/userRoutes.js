const express = require("express");
const userController = require("../controllers/userControllers");
const router = express.Router();
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const app = express();

app.use(makeUserAvailableInViews);

router.post("/registrar/usuario", userController.store);

router.post("/login");
router.post("/logout");

module.exports = router;