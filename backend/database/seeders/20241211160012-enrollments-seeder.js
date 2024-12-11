'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('enrollments', [
      {
        student_id: 4,
        course_id: 1,
        progress: 75.5,
        enrolled_at: new Date('2024-01-10 10:00:00')
      },
      {
        student_id: 5,
        course_id: 4,
        progress: 45.0,
        enrolled_at: new Date('2024-01-12 15:00:00')
      },
      {
        student_id: 4,
        course_id: 3,
        progress: 100.0,
        completion_date: new Date('2024-01-20 16:30:00'),
        enrolled_at: new Date('2024-01-05 09:00:00')
      },
      {
        student_id: 5,
        course_id: 1,
        progress: 60.0,
        enrolled_at: new Date('2024-01-08 11:30:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollments', null, {});
  }
}; 