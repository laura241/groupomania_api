module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    postId: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },

  }, )

  return Post;
};