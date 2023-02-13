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
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        image: {
          allowNull: true,
          type: DataTypes.BLOB,
        },
      },
      { sequelize, modelName: "article", timestamps: true, createdAt: true, updatedAt: false },
    );
    return Article;
  }
}

module.exports = Article;
