//SIN USAR

module.exports = (req, res, next) => {
  req.locals.message = req.flash("info", "Credenciales incorrectas");
  next();
};
