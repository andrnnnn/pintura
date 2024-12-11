'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('refunds', [
      {
        order_id: 2,
        reason: 'Kendala teknis dalam mengakses materi kursus',
        refund_amount: 2200000.00,
        status: 'pending',
        created_at: new Date('2024-01-14 10:00:00'),
        updated_at: new Date('2024-01-14 10:00:00')
      },
      {
        order_id: 1,
        reason: 'Ketidaksesuaian materi dengan deskripsi kursus',
        refund_amount: 2500000.00,
        status: 'rejected',
        processed_at: new Date('2024-01-13 15:00:00'),
        created_at: new Date('2024-01-12 09:00:00'),
        updated_at: new Date('2024-01-13 15:00:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('refunds', null, {});
  }
}; 