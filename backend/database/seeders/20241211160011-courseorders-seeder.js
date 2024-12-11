'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courseorders', [
      {
        student_id: 4,
        course_id: 1,
        order_number: 'ORD-20240110-001',
        total_price: 2500000.00,
        payment_method_id: 1,
        payment_status: 'completed',
        payment_proof: 'https://example.com/proofs/transfer-receipt-001.jpg',
        payment_date: new Date('2024-01-10 09:30:00'),
        expired_at: new Date('2024-01-11 09:30:00'),
        notes: 'Pembayaran Full Stack Web Development Bootcamp',
        order_date: new Date('2024-01-10 09:15:00'),
        updated_at: new Date('2024-01-10 09:30:00')
      },
      {
        student_id: 5,
        course_id: 4,
        order_number: 'ORD-20240112-002',
        total_price: 2200000.00,
        payment_method_id: 3,
        payment_status: 'completed',
        payment_proof: 'https://example.com/proofs/dana-payment-002.jpg',
        payment_date: new Date('2024-01-12 14:20:00'),
        expired_at: new Date('2024-01-13 14:20:00'),
        notes: 'Pembayaran UI/UX Design Professional Course',
        order_date: new Date('2024-01-12 14:15:00'),
        updated_at: new Date('2024-01-12 14:20:00')
      },
      {
        student_id: 4,
        course_id: 2,
        order_number: 'ORD-20240115-003',
        total_price: 3000000.00,
        payment_method_id: 2,
        payment_status: 'pending',
        expired_at: new Date('2024-01-16 16:30:00'),
        notes: 'Pembayaran Machine Learning Fundamentals',
        order_date: new Date('2024-01-15 16:30:00'),
        updated_at: new Date('2024-01-15 16:30:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courseorders', null, {});
  }
}; 