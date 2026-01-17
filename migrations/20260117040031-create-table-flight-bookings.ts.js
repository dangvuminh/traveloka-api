"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("flight_bookings", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      bookingCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      flightId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "flights",
          key: "id",
        },
      },
      seatType: {
        allowNull: false,
        type: Sequelize.ENUM("ECO", "PRE", "BUS", "FIRST"),
      },
      customerName: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      passport: {
        allowNull: true,
        type: Sequelize.UUID,
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("flight_bookings");
  },
};
