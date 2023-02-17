const isWriter = (req, res, next) => {
  if (req.user.role.code >= 200) return next();
  res.send("No permission to do this");
};

module.exports = isWriter;
