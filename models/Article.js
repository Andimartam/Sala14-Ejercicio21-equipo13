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
        create_date: {
          allowNull: true,
          type: DataTypes.DATE,
        },
      },
      { sequelize, modelName: "article", timestamps: false },
    );
    return Article;
  }
}

module.exports = Article;
