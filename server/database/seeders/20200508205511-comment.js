'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert(
      "comments",
      [
        {
          userId: 1,
          postId: 2,
          comment: "Birds in a hurricane",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          postId: 1,
          comment: "Malto bars in Paris on Sunday",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete("comments", null, {})
};
