"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
  UPDATE flights f
  SET "code" = sub.code || sub.rn
  FROM (
    SELECT f.id, a.code,
           ROW_NUMBER() OVER (PARTITION BY f."airlineId" ORDER BY f.id) as rn
    FROM flights f
    JOIN airlines a ON f."airlineId" = a.id
  ) sub
  WHERE f.id = sub.id
`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      UPDATE flights
      SET "code" = NULL
    `);
  },
};
