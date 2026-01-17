"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("flights", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      airlineId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "airlines",
          key: "id",
        },
      },
      flightSchedule: {
        type: Sequelize.ENUM("MON", "TUE", "WED", "THURS", "FRI", "SAT", "SUN"),
        allowNull: false,
      },
      flightTime: {
        type: Sequelize.TIME,
        allowNull: true,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("flights");
  },
};
