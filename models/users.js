module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    userId: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    last_name: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(60),
      allowNull: false,
      unique: true
    },
    gp_service: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    gp_login: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    gp_password: {
      type: Sequelize.STRING(20),
      allowNull: false
    }

  })
  return User;
}