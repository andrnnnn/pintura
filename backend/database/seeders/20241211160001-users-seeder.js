'use strict';
const { encrypt } = require('../../helpers/encryption');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = await encrypt('password123');
    
    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        name: 'Admin Utama',
        email: 'admin@pintar.co.id',
        password: password,
        credits: 1000,
        role_id: 1,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 2,
        name: 'Dr. Budi Prakoso',
        email: 'budi.instructor@pintar.co.id', 
        password: password,
        credits: 500,
        role_id: 2,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 3,
        name: 'Siti Aminah',
        email: 'siti.instructor@pintar.co.id',
        password: password,
        credits: 500,
        role_id: 2,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 4,
        name: 'Ahmad Student',
        email: 'ahmad@gmail.com',
        password: password,
        credits: 95,
        role_id: 3,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 5,
        name: 'Maya Student',
        email: 'maya@gmail.com',
        password: password,
        credits: 85,
        role_id: 3,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 6,
        name: 'Dr. Sarah Konselor',
        email: 'sarah.counselor@pintar.co.id',
        password: password,
        credits: 200,
        role_id: 4,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 7,
        name: 'Rudi Mentor',
        email: 'rudi.mentor@pintar.co.id',
        password: password,
        credits: 300,
        role_id: 5,
        email_verified: '1',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
}; 