'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          title: "melancholy and the infinite sadness",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "hum drum lump sum",
          content: "contgent",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Some rum tum mums",
          content: "congent",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => 
    queryInterface.bulkDelete("Posts", null, {})
};
