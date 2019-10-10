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
  return queryInterface.bulkInsert('Courses', [
    {
      userId: 1,
      title: 'course1',
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      userId: 1,
      title: 'course2',
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      userId: 2,
      title: 'course3',
      createdAt: new Date(), updatedAt: new Date()
    },
    {
      userId: 3,
      title: 'course4',
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
  return queryInterface.bulkDelete('Courses', null, {});
}
