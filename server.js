require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const dbInitialSetup = require("./dbInitialSetup");
const bcrypt = require("bcryptjs");
const passport = require("./passport/passportConfig");
const app = express();

passport(app);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

routes(app);

//dbInitialSetup();

app.listen(3000, function (req, res) {
  console.log("Esto se ha enviado al puerto 3000");
});
