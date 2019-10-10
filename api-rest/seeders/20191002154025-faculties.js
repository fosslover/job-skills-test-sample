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
  return queryInterface.bulkInsert('Faculties', [
    {
      userId: 1,
      name: 'faculty1',
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      userId: 3,
      name: 'faculty3',
      createdAt: new Date(), updatedAt: new Date()
    }
  ], {});
}
export function down(queryInterface, Sequelize) {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  return queryInterface.bulkDelete('Faculties', null, {});
}
