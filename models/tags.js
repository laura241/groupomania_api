/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    idTag: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tags'
  });
};
