'use strict';

export function up(queryInterface, Sequelize) {
  /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
  */
  return queryInterface.bulkInsert('Users', [
    {
      name: 'user1',
      email: 'user1@vietnam.yes',
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      name: 'user2',
      email: 'user2@vietnam.yes',
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      name: 'user3',
      email: 'user3@vietnam.yes',
      createdAt: new Date(), updatedAt: new Date()
    },
  ], {});
}
export function down(queryInterface, Sequelize) {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  return queryInterface.bulkDelete('Users', null, {});
}
