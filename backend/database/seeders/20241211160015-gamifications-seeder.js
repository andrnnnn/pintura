'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gamifications', [
      {
        gamification_id: 1,
        student_id: 4,
        exp_points: 3500,
        rank_id: 3, // Achiever
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        gamification_id: 2,
        student_id: 5,
        exp_points: 1200,
        rank_id: 2, // Explorer
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gamifications', null, {});
  }
}; 