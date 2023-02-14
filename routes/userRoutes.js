const express = require("express");
const userController = require("../controllers/userControllers");
const router = express.Router();

router.post("/registrar/usuario", userController.store);

router.post("/login");
router.post("/logout");

module.exports = router;