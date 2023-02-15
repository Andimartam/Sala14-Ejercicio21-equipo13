const articleRoutes = require("./articleRoutes");
const publicRoutes = require("./publicRoutes");
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");
const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  app.use(userRoutes);
  app.use(articleRoutes);
  app.use(publicRoutes);
  app.use(commentRoutes);
  app.use(privateRoutes);
};
