const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User, Role } = require("../models");

module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      {
        usernameField: "mail",
        passwordField: "password",
      },
      async function (username, password, done) {
        try {
          const user = await User.findOne({ where: { mail: username } });
          if (!user) {
            //console.log("fallo el usuario");
            return done(null, false, { message: "Credenciales incorrectas" });
          }
          const enteredPassword = password;
          //const storedPassword = user.password;
          const passwordCheck = await user.isValidPassword(enteredPassword);
          if (!passwordCheck) {
            //console.log("fallo la contraseña");
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
      const user = await User.findByPk(id, { include: Role });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};
