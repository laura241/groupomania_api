const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gp_service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gp_login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gp_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
