const express = require("express");
const apiControllers = require("../controllers/apiControllers");
const { expressjwt: checkJwt } = require("express-jwt");
const router = express.Router();

router.post("/tokens", apiControllers.tokens);

router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

router.get("/articulos", apiControllers.index); //show all, filter by author or filter by title
router.post("/articulos", apiControllers.store); //create artcile in db
router.patch("/articulos/:id", apiControllers.update);
router.delete("/articulos/:id", apiControllers.destroy);

module.exports = router;
