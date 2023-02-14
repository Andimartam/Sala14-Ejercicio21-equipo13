require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const app = express();

/*------------------------------------*/
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (username, password, done) {
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          console.log("fallo el usuario");
          return done(null, false, { message: "Credenciales incorrectas" });
        }
        const enteredPassword = req.body.password;
        const storedPassword = user.password;
        const passwordCheck = await bcrypt.compare(enteredPassword, storedPassword);
        if (!passwordCheck) {
          console.log("fallo la contraseña");
          return done(null, false, { message: "Credenciales incorrectas" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

/*------------------------------------*/

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
routes(app);
app.listen(3000, function (req, res) {
  console.log("Esto se ha enviado al puerto 3000");
});
