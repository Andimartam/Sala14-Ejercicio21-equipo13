const { Sequelize, Model, DataTypes } = require("sequelize");

class Role extends Model {
  static initModel(sequelize) {
    Role.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      { sequelize, modelName: "role", timestamps: false },
    );
    return Role;
  }
}

module.exports = Role;
