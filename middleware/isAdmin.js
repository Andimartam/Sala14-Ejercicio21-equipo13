const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.roleId > 3) {
    next();
  } else {
    res.send("No permission to do this");
  }
};

module.exports = isAdmin;
