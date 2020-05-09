'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
  }, {});
  user.associate = function(models) {
    user.hasMany(models.post, {
    	foreignKey: 'userId',
    	as: 'posts',
    	onDelete: 'CASCADE'
    });

    user.hasMany(models.comment, {
    	foreignKey: 'userId',
    	as: 'comments',
    	onDelete: 'CASCADE'
    })
  };
  return user;
};