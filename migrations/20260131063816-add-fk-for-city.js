'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('cities', 'countryId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('cities', 'countryId');
  }
};
