module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    userId: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lastName: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(60),
      allowNull: false,
      unique: true
    },
    gpPassword: {
      type: Sequelize.STRING(255),
      allowNull: false
    }

  })
  return User;
}