const isReader = (req, res, next) => {
  if (req.isAuthenticated() && req.user.roleId > 0) {
    next();
  } else {
    res.send("No permission to do this");
  }
};

module.exports = isReader;
