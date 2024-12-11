'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoriescourses', [
      {
        category_id: 1,
        name: 'Web Development',
        description: 'Kursus pengembangan web dari dasar hingga mahir, mencakup HTML, CSS, JavaScript, dan framework modern',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 2,
        name: 'Data Science',
        description: 'Pembelajaran mendalam tentang analisis data, machine learning, dan artificial intelligence',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 3,
        name: 'Digital Marketing',
        description: 'Strategi pemasaran digital, SEO, social media marketing, dan analisis metrik',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 4,
        name: 'UI/UX Design',
        description: 'Desain antarmuka pengguna, pengalaman pengguna, dan prinsip-prinsip desain modern',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 5,
        name: 'Mobile Development',
        description: 'Pengembangan aplikasi mobile untuk Android dan iOS menggunakan teknologi terkini',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 6,
        name: 'Business & Entrepreneurship',
        description: 'Kursus bisnis, kewirausahaan, dan manajemen untuk membangun startup sukses',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoriescourses', null, {});
  }
}; 