const express = require("express");
const pageController = require("../controllers/pagesControllers");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const app = express();

app.use(makeUserAvailableInViews);

router.get("/", pageController.index);
router.get("/registrar/usuario", pageController.create);
router.get("/login", pageController.login);
router.post("/login", authControllers.login);

module.exports = router;
