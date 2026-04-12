"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("flight_by_date", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      flightId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "flights",
          key: "id",
        },
      },
      flightDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numOfEco: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numOfBus: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numOfPre: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numOfFirst: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(
          "WAITING",
          "CHECKIN",
          "BOARDING",
          "DELAYED",
          "RESCHEDULED",
          "CANCELLED",
          "COMPLETE",
        ),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("flight_by_date");
  },
};
