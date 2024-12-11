'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stripe_transactions', [
      {
        id: 1,
        user_id: 4,
        name: 'Ahmad Student',
        phone: '+6281234567893',
        session_id: 'cs_test_a1b2c3d4e5f6g7h8i9j0',
        amount: 2500000,
        quantity: 1,
        status: 'completed',
        created_at: new Date('2024-01-10 09:15:00'),
        updated_at: new Date('2024-01-10 09:30:00')
      },
      {
        id: 2,
        user_id: 5,
        name: 'Maya Student',
        phone: '+6281234567894',
        session_id: 'cs_test_k1l2m3n4o5p6q7r8s9t0',
        amount: 2200000,
        quantity: 1,
        status: 'completed',
        created_at: new Date('2024-01-12 14:15:00'),
        updated_at: new Date('2024-01-12 14:20:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stripe_transactions', null, {});
  }
}; 