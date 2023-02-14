const articleRoutes = require("./articleRoutes");
const publicRoutes = require("./publicRoutes");
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(userRoutes);
  app.use(articleRoutes);
  app.use(publicRoutes);
  app.use(commentRoutes);
};
