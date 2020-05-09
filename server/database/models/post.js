'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    post.hasMany(models.comment, {
    	foreignKey: 'postId',
    	as: 'comments',
    	onDelete: 'CASCADE'
    });
    post.belongsTo(models.user, {
    	foreignKey: 'userId',
    	as: 'author',
    	onDelete: 'CASCADE'
    })
  };
  return post;
};