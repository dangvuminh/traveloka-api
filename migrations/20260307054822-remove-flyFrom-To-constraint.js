"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("flights", "flights_flyFrom_fkey");
    await queryInterface.removeConstraint("flights", "flights_flyTo_fkey");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint("flights", {
      fields: ["flyFrom"],
      type: "foreign key",
      name: "flights_flyFrom_fkey",
      references: {
        table: "cities",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    });

    await queryInterface.addConstraint("flights", {
      fields: ["flyTo"],
      type: "foreign key",
      name: "flights_flyTo_fkey",
      references: {
        table: "cities",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    });
  },
};
