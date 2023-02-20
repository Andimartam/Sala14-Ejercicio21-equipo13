const passport = require("passport");

const login = (req, res) => {
  req.flash("failed-login", "Credenciales incorrectas");
  passport.authenticate("local", {
    successRedirect: req.session.redirectTo ? req.session.redirectTo : "/",
    failureRedirect: "/login",
  })(req, res);
};
module.exports = { login };
