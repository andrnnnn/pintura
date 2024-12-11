'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userroles', [
      {
        role_id: 1,
        role_name: 'admin',
        description: 'Administrator dengan akses penuh untuk mengelola seluruh sistem, user, konten dan konfigurasi platform pembelajaran'
      },
      {
        role_id: 2,
        role_name: 'instructor',
        description: 'Pengajar profesional yang dapat membuat dan mengelola kursus, materi pembelajaran, dan berinteraksi dengan siswa'
      },
      {
        role_id: 3,
        role_name: 'student',
        description: 'Pelajar yang dapat mengakses kursus, mengikuti pembelajaran, mengerjakan tugas dan berinteraksi dalam forum diskusi'
      },
      {
        role_id: 4,
        role_name: 'counselor', 
        description: 'Konselor akademik yang memberikan bimbingan, konsultasi dan saran terkait pembelajaran dan pengembangan diri siswa'
      },
      {
        role_id: 5,
        role_name: 'mentor',
        description: 'Mentor yang membimbing siswa secara personal, memberikan arahan dan berbagi pengalaman praktis di bidang tertentu'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userroles', null, {});
  }
};