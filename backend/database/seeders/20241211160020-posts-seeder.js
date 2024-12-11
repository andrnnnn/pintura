'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        forum_id: 1,
        user_id: 4,
        content: 'Bagaimana cara mengoptimalkan performa React dengan useMemo dan useCallback?',
        created_at: new Date('2024-01-15 13:00:00'),
        updated_at: new Date('2024-01-15 13:00:00')
      },
      {
        forum_id: 1,
        user_id: 2, // Dr. Budi (instructor)
        content: 'useCallback digunakan untuk memoize fungsi, sedangkan useMemo untuk memoize nilai. Berikut contoh implementasinya...',
        created_at: new Date('2024-01-15 13:30:00'),
        updated_at: new Date('2024-01-15 13:30:00')
      },
      {
        forum_id: 2,
        user_id: 5,
        content: 'Ada yang bisa bantu menjelaskan perbedaan antara supervised dan unsupervised learning?',
        created_at: new Date('2024-01-16 10:00:00'),
        updated_at: new Date('2024-01-16 10:00:00')
      },
      {
        forum_id: 3,
        user_id: 5,
        content: 'Sharing hasil design landing page project saya, mohon feedbacknya 🙏\nhttps://www.figma.com/file/landing-page-design',
        created_at: new Date('2024-01-17 09:00:00'),
        updated_at: new Date('2024-01-17 09:00:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
}; 