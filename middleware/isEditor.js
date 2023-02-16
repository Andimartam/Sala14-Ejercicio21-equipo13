const isEditor = (req, res, next) => {
  if (req.isAuthenticated() && req.user.roleId > 2) {
    next();
  } else {
    res.send("No permission to do this");
  }
};

module.exports = isEditor;
