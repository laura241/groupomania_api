/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topics', {
    idTopic: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'topics'
  });
};
