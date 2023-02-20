const { Sequelize, Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            notNull: {
              msg: "Please enter a title for your article",
            },
            notEmpty: {
              msg: "Please enter a title for your article",
            },
          },
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Please enter some content for your article",
            },
            notEmpty: {
              msg: "Please enter some content for your article",
            },
          },
        },
        image: {
          allowNull: true,
          type: DataTypes.STRING(255),
        },
      },
      { sequelize, modelName: "article", timestamps: true, createdAt: true, updatedAt: false },
    );
    return Article;
  }
}

module.exports = Article;
