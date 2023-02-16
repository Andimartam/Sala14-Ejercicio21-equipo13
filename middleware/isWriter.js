const isWriter = (req, res, next) => {
  if (req.isAuthenticated() && req.user.roleId > 1) {
    next();
  } else {
    res.send("No permission to do this");
  }
};

module.exports = isWriter;
