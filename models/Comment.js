const { Sequelize, Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static initModel(sequelize) {
    Comment.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "not Null. Please enter some content for your comment",
            },
            notEmpty: {
              msg: "not Empty. Please enter some content for your comment",
            },
          },
        },
      },
      { sequelize, modelName: "comment", timestamps: false },
    );
    return Comment;
  }
}

module.exports = Comment;
