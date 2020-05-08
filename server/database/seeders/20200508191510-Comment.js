'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          postId: 2,
          comment: "You suck",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          postId: 1,
          comment: "Once upon a midnight dreary though I ponder weak and weary. Suddenly I heard a rapping, rapping at my chamber door.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
    {}
      ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Comments", null, {})
};
