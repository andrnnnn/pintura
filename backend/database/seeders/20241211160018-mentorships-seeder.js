'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mentorships', [
      {
        mentor_id: 7, // Rudi Mentor
        mentee_id: 4, // Ahmad Student
        status: 'active',
        created_at: new Date('2024-01-05'),
        updated_at: new Date('2024-01-05')
      },
      {
        mentor_id: 7,
        mentee_id: 5, // Maya Student
        status: 'pending',
        created_at: new Date('2024-01-15'),
        updated_at: new Date('2024-01-15')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mentorships', null, {});
  }
}; 