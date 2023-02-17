const isEditor = (req, res, next) => {
  if (req.user.role.code >= 300) return next();
  res.send("No permission to do this");
};

module.exports = isEditor;
