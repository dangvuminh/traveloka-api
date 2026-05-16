'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('flight_by_date', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
    }),
    await queryInterface.addColumn('flight_by_date', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('flight_by_date', 'createdAt');
    await queryInterface.removeColumn('flight_by_date', 'updatedAt')
  }
};
