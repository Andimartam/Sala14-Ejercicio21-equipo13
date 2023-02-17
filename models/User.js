const { Sequelize, Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
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
          unique: true, // unique
        },
      },
      { sequelize, modelName: "user", timestamps: true, paranoid: true },
    );

    //ACA LO DE HOOK
    User.beforeBulkCreate(async (users) => {
      for (const user of users) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    User.beforeCreate(async (user) => {
      user.password = await bcrypt.hash(user.password, 8);
    });

    return User;
  }
}

module.exports = User;
