const { Sequelize, Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        firstname: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        mail: {
          allowNull: false,
          type: DataTypes.STRING(50),
        },
      },
      { sequelize, modelName: "user", timestamps: false },
    );
    return User;
  }
}

module.exports = User;
