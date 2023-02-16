require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const app = express();
const bcrypt = require("bcryptjs");
const passport = require("./passport/passportConfig");

passport(app);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
routes(app);
app.listen(3000, function (req, res) {
  console.log("Esto se ha enviado al puerto 3000");
});
