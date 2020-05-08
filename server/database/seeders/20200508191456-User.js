'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
   'Users',
    [
      {
        name: 'Person',
        email: 'blah@blah.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     {
        name: 'Henry Allen',
        email: 'hallen@flash.com',
        createdAt: new Date(),
        updatedAt: new Date(),
     },
    ],
  {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
