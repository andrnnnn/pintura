'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('paymentmethods', [
      {
        name: 'Bank Transfer BCA',
        description: 'Transfer bank melalui rekening BCA',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'Bank Transfer Mandiri',
        description: 'Transfer bank melalui rekening Mandiri',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'DANA',
        description: 'Pembayaran melalui e-wallet DANA',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'GoPay',
        description: 'Pembayaran melalui e-wallet GoPay',
        is_active: true,
        created_at: new Date()
      },
      {
        name: 'OVO',
        description: 'Pembayaran melalui e-wallet OVO',
        is_active: true,
        created_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paymentmethods', null, {});
  }
};