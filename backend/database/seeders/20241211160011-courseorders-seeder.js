'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courseorders', [
      {
        order_id: 1,
        student_id: 4,
        course_id: 1,
        order_number: 'ORD-20240110-001',
        total_price: 2500000,
        payment_method_id: 1,
        payment_status: 'completed',
        payment_proof: 'https://example.com/proofs/transfer-receipt-001.jpg',
        payment_date: '2024-01-10 02:30:00',
        expired_at: '2024-01-11 02:30:00',
        notes: 'Pembayaran Full Stack Web Development Bootcamp',
        order_date: '2024-01-10 02:15:00',
        updated_at: '2024-01-10 02:30:00'
      },
      {
        order_id: 2,
        student_id: 5,
        course_id: 4,
        order_number: 'ORD-20240112-002',
        total_price: 2200000,
        payment_method_id: 3,
        payment_status: 'completed',
        payment_proof: 'https://example.com/proofs/dana-payment-002.jpg',
        payment_date: '2024-01-12 07:20:00',
        expired_at: '2024-01-13 07:20:00',
        notes: 'Pembayaran UI/UX Design Professional Course',
        order_date: '2024-01-12 07:15:00',
        updated_at: '2024-01-12 07:20:00'
      },
      {
        order_id: 3,
        student_id: 4,
        course_id: 2,
        order_number: 'ORD-20240115-003',
        total_price: 3000000,
        payment_method_id: 2,
        payment_status: 'pending',
        payment_proof: null,
        payment_date: null,
        expired_at: '2024-01-16 09:30:00',
        notes: 'Pembayaran Machine Learning Fundamentals',
        order_date: '2024-01-15 09:30:00',
        updated_at: '2024-01-15 09:30:00'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courseorders', null, {});
  }
}; 