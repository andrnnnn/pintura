'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('invoices', [
      {
        order_id: 1,
        invoice_number: 'INV/2024/01/001',
        subtotal: 2500000.00,
        discount: 0.00,
        tax: 250000.00,
        total: 2750000.00,
        created_at: new Date('2024-01-10 09:15:00')
      },
      {
        order_id: 2,
        invoice_number: 'INV/2024/01/002',
        subtotal: 2200000.00,
        discount: 200000.00,
        tax: 200000.00,
        total: 2200000.00,
        created_at: new Date('2024-01-12 14:15:00')
      },
      {
        order_id: 3,
        invoice_number: 'INV/2024/01/003',
        subtotal: 3000000.00,
        discount: 300000.00,
        tax: 270000.00,
        total: 2970000.00,
        created_at: new Date('2024-01-15 16:30:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('invoices', null, {});
  }
}; 