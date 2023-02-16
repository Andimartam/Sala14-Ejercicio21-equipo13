const articleRoutes = require("./articleRoutes");
const publicRoutes = require("./publicRoutes");
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");
const privateRoutes = require("./privateRoutes");
const makeUserAvailableInViews = require("../middleware/makeUserAvailableInViews");
const isAuthenticated = require("../middleware/isAuthenticated");

module.exports = (app) => {
  app.use(makeUserAvailableInViews);
  app.use(userRoutes);
  app.use(articleRoutes);
  app.use(publicRoutes);
  app.use(commentRoutes);
  app.use(isAuthenticated);
  app.use(privateRoutes);
};
