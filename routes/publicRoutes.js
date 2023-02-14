const express = require("express");
const pageController = require("../controllers/pagesControllers");
const router = express.Router();

router.get("/", pageController.index);
router.get("/registrar/usuario", pageController.create);

module.exports = router;
