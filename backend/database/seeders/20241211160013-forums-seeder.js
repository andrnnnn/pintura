'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('forums', [
      {
        course_id: 1,
        title: 'Diskusi Project MERN Stack',
        description: 'Forum untuk diskusi dan bantuan seputar project menggunakan MongoDB, Express, React, dan Node.js',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 2,
        title: 'Machine Learning Study Group',
        description: 'Tempat berbagi pengalaman dan solusi dalam implementasi algoritma machine learning',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 4,
        title: 'UI/UX Design Feedback',
        description: 'Forum untuk memberikan dan menerima feedback tentang desain UI/UX',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('forums', null, {});
  }
}; 