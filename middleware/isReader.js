const isReader = (req, res, next) => {
  if (req.user.role.code >= 100) return next();
  res.send("No permission to do this");
};

module.exports = isReader;
