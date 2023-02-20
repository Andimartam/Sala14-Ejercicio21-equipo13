require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const dbInitialSetup = require("./dbInitialSetup");
const passport = require("./passport/passportConfig");
const flash = require("express-flash");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

passport(app);
app.use(flash());

//express-flash
app.use((req, res, next) => {
  app.locals.failLoginMessage = req.flash("failed-login");
  app.locals.failRegisterMessage = req.flash("failed-register");
  next();
});

routes(app);

//dbInitialSetup();

app.listen(3000, function (req, res) {
  console.log("Esto se ha enviado al puerto 3000");
});
