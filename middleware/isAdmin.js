const isAdmin = (req, res, next) => {
  if (req.user.role.code >= 400) return next();
  res.send("No permission to do this");
};

module.exports = isAdmin;
