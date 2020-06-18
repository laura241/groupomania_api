/* jshint indent: 2 */

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('message', {
    messageId: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  })
  return Message;
};