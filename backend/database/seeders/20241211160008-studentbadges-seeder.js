'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('studentbadges', [
      {
        student_id: 4,
        badge_id: 1,
        earned_at: new Date('2024-01-10 15:30:00')
      },
      {
        student_id: 4,
        badge_id: 2,
        earned_at: new Date('2024-01-15 18:45:00')
      },
      {
        student_id: 5,
        badge_id: 1,
        earned_at: new Date('2024-01-12 14:20:00')
      },
      {
        student_id: 5,
        badge_id: 4,
        earned_at: new Date('2024-01-18 09:15:00')
      },
      {
        student_id: 4,
        badge_id: 5,
        earned_at: new Date('2024-01-20 16:00:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('studentbadges', null, {});
  }
}; 