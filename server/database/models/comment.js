'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    postId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
	comment.belongsTo(models.user, {
		foreignKey: 'userId',
		as: 'author'
	});

	comment.belongsTo(models.post, {
		foreignKey: 'postId',
		as: 'post'
	})	
  };
  return comment;
};