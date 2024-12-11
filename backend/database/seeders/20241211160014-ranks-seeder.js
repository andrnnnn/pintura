'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ranks', [
      {
        name: 'Newbie',
        min_exp_required: 0,
        description: 'Pemula yang baru memulai perjalanan pembelajaran',
        created_at: new Date()
      },
      {
        name: 'Explorer',
        min_exp_required: 1000,
        description: 'Telah menyelesaikan beberapa kursus dasar',
        created_at: new Date()
      },
      {
        name: 'Achiever',
        min_exp_required: 3000,
        description: 'Menunjukkan dedikasi dalam pembelajaran',
        created_at: new Date()
      },
      {
        name: 'Expert',
        min_exp_required: 7000,
        description: 'Mahir dalam berbagai bidang pembelajaran',
        created_at: new Date()
      },
      {
        name: 'Master',
        min_exp_required: 15000,
        description: 'Tingkat tertinggi dengan penguasaan materi yang luar biasa',
        created_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ranks', null, {});
  }
}; 