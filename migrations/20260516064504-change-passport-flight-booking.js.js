'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('flight_bookings', 'passport', {
      type: Sequelize.STRING,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('flight_bookings', 'passport', {
      type: Sequelize.UUID,
    })
  }
};
