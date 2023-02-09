const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
  }
);

class Article extends Model {}

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
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize, modelName: "article", timestamps: false }
);

module.exports = { sequelize, Article };
