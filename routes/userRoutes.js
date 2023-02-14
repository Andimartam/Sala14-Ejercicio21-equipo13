const express = require("express");
const userController = require("../controllers/userControllers");
const router = express.Router();

router.post("/registrar/usuario", userController.store);

module.exports = router;
