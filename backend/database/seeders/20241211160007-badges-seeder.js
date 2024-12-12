'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('badges', [
      {
        badge_id: 1,
        name: 'First Steps',
        description: 'Menyelesaikan kursus pertama dengan nilai minimal B',
        image_url: 'https://cdn-icons-png.flaticon.com/128/1435/1435688.png',
        requirement: 'Selesaikan 1 kursus dengan nilai minimal 80',
        created_at: new Date()
      },
      {
        badge_id: 2,
        name: 'Code Warrior',
        description: 'Menyelesaikan 5 project pemrograman dengan sempurna',
        image_url: 'https://cdn-icons-png.flaticon.com/128/1435/1435703.png',
        requirement: 'Selesaikan 5 project coding dengan nilai 90+',
        created_at: new Date()
      },
      {
        badge_id: 3,
        name: 'Data Master',
        description: 'Mahir dalam analisis dan visualisasi data',
        image_url: 'https://cdn-icons-png.flaticon.com/128/1435/1435697.png',
        requirement: 'Selesaikan semua kursus Data Science dengan nilai rata-rata 85+',
        created_at: new Date()
      },
      {
        badge_id: 4,
        name: 'Design Guru',
        description: 'Menciptakan desain UI/UX yang luar biasa',
        image_url: 'https://cdn-icons-png.flaticon.com/128/1435/1435704.png',
        requirement: 'Selesaikan 3 project UI/UX dengan feedback positif',
        created_at: new Date()
      },
      {
        badge_id: 5,
        name: 'Perfect Attendance',
        description: 'Kehadiran 100% dalam satu kursus',
        image_url: 'https://cdn-icons-png.flaticon.com/128/1435/1435683.png',
        requirement: 'Hadiri semua sesi dalam satu kursus tanpa absen',
        created_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('badges', null, {});
  }
}; 