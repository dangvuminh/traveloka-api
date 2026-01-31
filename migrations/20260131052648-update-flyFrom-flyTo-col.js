"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("flights", "flyFrom", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "airports",
        key: "id",
      },
    });
    await queryInterface.changeColumn("flights", "flyTo", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "airports",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("flights", "flyFrom");
    await queryInterface.removeColumn("flights", "flyTo");
  },
};
