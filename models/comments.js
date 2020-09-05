module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    commentId: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    isPublic: {
      type: Sequelize.ENUM,
      values: ["true", "false"],
      defaultValue: "false",
    },
  });

  return Comment;
};
