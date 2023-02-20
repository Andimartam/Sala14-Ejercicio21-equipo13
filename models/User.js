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
          validate: {
            notNull: {
              msg: "Please enter your firstname",
            },
            notEmpty: {
              msg: "Please enter your firstname",
            },
          },
        },
        lastname: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            notNull: {
              msg: "Please enter your lastname",
            },
            notEmpty: {
              msg: "Please enter your lastname",
            },
          },
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            notNull: {
              msg: "Please enter your password",
            },
            notEmpty: {
              msg: "Please enter your password",
            },
          },
        },
        mail: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true, // unique
          validate: {
            isEmail: true,
            notNull: {
              msg: "Please enter your mail",
            },
            notEmpty: {
              msg: "Please enter your mail",
            },
          },
        },
      },
      { sequelize, modelName: "user", timestamps: true, paranoid: true },
    );

    //ACA LO DE HOOKS
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
