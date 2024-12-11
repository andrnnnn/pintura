'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('counselingsessions', [
      {
        counselor_id: 6, // Dr. Sarah Konselor
        student_id: 4, // Ahmad Student
        session_date: new Date('2024-01-25 13:00:00'),
        status: 'scheduled',
        notes: 'Konsultasi mengenai perencanaan karir di bidang web development',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        counselor_id: 6,
        student_id: 5, // Maya Student
        session_date: new Date('2024-01-15 14:00:00'),
        status: 'completed',
        notes: 'Diskusi tentang pengembangan skill UI/UX dan portfolio building',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        counselor_id: 6,
        student_id: 4,
        session_date: new Date('2024-01-10 11:00:00'),
        status: 'completed',
        notes: 'Review progress pembelajaran dan target pencapaian berikutnya',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        counselor_id: 6,
        student_id: 5,
        session_date: new Date('2024-01-28 15:30:00'),
        status: 'scheduled',
        notes: 'Konsultasi persiapan internship dan pengembangan soft skills',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        counselor_id: 6,
        student_id: 4,
        session_date: new Date('2024-01-05 10:00:00'),
        status: 'completed',
        notes: 'Orientasi program pembelajaran dan penetapan goals',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('counselingsessions', null, {});
  }
}; 