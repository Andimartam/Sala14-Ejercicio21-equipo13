const express = require("express");
const pageController = require("../controllers/pagesControllers");
const router = express.Router();

router.get("/", pageController.index);
router.get("/registrar/usuario", pageController.create);
router.get("/login", pageController.login);

module.exports = router;
