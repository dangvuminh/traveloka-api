"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    (await queryInterface.addColumn("flights", "flyFrom", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "cities",
        key: "id",
      },
    }),
      await queryInterface.addColumn("flights", "flyTo", {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "cities",
          key: "id",
        },
      }),
      await queryInterface.addColumn("flights", "fromTime", {
        type: Sequelize.TIME,
        allowNull: false,
      }),
      await queryInterface.addColumn("flights", "toTime", {
        type: Sequelize.TIME,
        allowNull: false,
      }),
      await queryInterface.addColumn("flights", "routeId", {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "flights",
          id: "id",
        },
      }),
      await queryInterface.addColumn("flights", "order", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("flights", "flyFrom");
    await queryInterface.removeColumn("flights", "flyTo");
    await queryInterface.removeColumn("flights", "fromTime");
    await queryInterface.removeColumn("flights", "toTime");
    await queryInterface.removeColumn("flights", "routeId");
    await queryInterface.removeColumn("flights", "order");
  },
};
