const express = require("express");
const commentController = require("../controllers/commentControllers");
const router = express.Router();
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const app = express();

app.use(makeUserAvailableInViews);

router.post("/articulos/:id", commentController.addComment);

module.exports = router;
