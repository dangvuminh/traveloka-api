"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    (await queryInterface.addColumn("flight_bookings", "flightByDateId", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      references: {
        key: "id",
        model: "flight_by_date",
      },
    }),
      await queryInterface.addColumn("flight_bookings", "status", {
        type: Sequelize.ENUM(
          "WAITING_PAYMENT",
          "WAITING_CONFIRMED",
          "ISSUED",
          "CANCELLED",
          "REFUNDING",
          "RESCHEDULED",
          "COMPLETE"
        ),
        defaultValue: Sequelize.UUIDV4,
        references: {
          key: "id",
          model: "flight_by_date",
        },
      }));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("flight_bookings","flightByDateId");
    await queryInterface.removeColumn("flight_bookings","status");
  },
};
