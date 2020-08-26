module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    postId: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    post: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    link: {
      type: Sequelize.STRING(200),
      allowNull: true
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
    isPublic: {
      type: Sequelize.ENUM,
      values: ['true', 'false'],
      defaultValue: 'false'
    },

  }, )

  return Post;
};