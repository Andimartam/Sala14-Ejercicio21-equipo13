const articleRoutes = require("./articleRoutes");
const publicRoutes = require("./publicRoutes");
const commentRoutes = require("./commentRoutes");

module.exports = (app) => {
  app.use(articleRoutes);
  app.use(publicRoutes);
  app.use(commentRoutes);
};
