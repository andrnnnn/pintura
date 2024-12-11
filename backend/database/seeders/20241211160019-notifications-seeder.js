'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notifications', [
      {
        user_id: 4,
        title: 'Tugas Baru',
        message: 'Tugas baru telah ditambahkan di kursus Full Stack Web Development',
        type: 'course',
        is_read: false,
        created_at: new Date('2024-01-15 10:00:00'),
        updated_at: new Date('2024-01-15 10:00:00')
      },
      {
        user_id: 5,
        title: 'Pembayaran Berhasil',
        message: 'Pembayaran kursus UI/UX Design Professional telah berhasil',
        type: 'payment',
        is_read: true,
        created_at: new Date('2024-01-12 14:30:00'),
        updated_at: new Date('2024-01-12 14:35:00')
      },
      {
        user_id: 4,
        title: 'Forum Diskusi Baru',
        message: 'Bergabunglah dalam diskusi "Tips Optimasi React Performance"',
        type: 'forum',
        is_read: false,
        created_at: new Date('2024-01-16 09:00:00'),
        updated_at: new Date('2024-01-16 09:00:00')
      },
      {
        user_id: 5,
        title: 'Sistem Update',
        message: 'Platform akan mengalami pemeliharaan pada tanggal 20 Januari 2024',
        type: 'system',
        is_read: false,
        created_at: new Date('2024-01-15 15:00:00'),
        updated_at: new Date('2024-01-15 15:00:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notifications', null, {});
  }
}; 