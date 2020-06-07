/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    messageId: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'messages'
  });
};
