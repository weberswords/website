'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'mcmillan1',
          email: 'mcmillanandsons@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          isVerified: true
        },
        {
          username: 'whirlygert',
          email: 'handsomest@blah.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          isVerified: true
        },
      ],
      {},
    )
  ,

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(
      'users', null, {}
    )
};
