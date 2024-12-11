'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'Full Stack Web Development Bootcamp',
        description: 'Kursus komprehensif pengembangan web full stack menggunakan MERN (MongoDB, Express, React, Node.js). Pelajari dari dasar hingga mahir dalam 12 minggu.',
        category_id: 1,
        rating: 4.8,
        price: 2500000.00,
        credits: 50,
        image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        institution: 'Pintar Tech Academy',
        is_trending: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Machine Learning Fundamentals',
        description: 'Pelajari dasar-dasar machine learning, dari algoritma klasik hingga deep learning. Termasuk hands-on project dengan Python dan TensorFlow.',
        category_id: 2,
        rating: 4.7,
        price: 3000000.00,
        credits: 60,
        image_url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
        institution: 'Data Science Institute',
        is_trending: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Digital Marketing Masterclass',
        description: 'Kuasai strategi pemasaran digital modern, termasuk SEO, content marketing, social media, dan Google Ads.',
        category_id: 3,
        rating: 4.6,
        price: 1800000.00,
        credits: 40,
        image_url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d4',
        institution: 'Digital Marketing Pro',
        is_trending: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'UI/UX Design Professional',
        description: 'Kursus desain UI/UX komprehensif dengan Figma dan Adobe XD. Belajar prinsip desain, wireframing, dan prototyping.',
        category_id: 4,
        rating: 4.9,
        price: 2200000.00,
        credits: 45,
        image_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
        institution: 'Design Academy',
        is_trending: '0',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Flutter Mobile App Development',
        description: 'Belajar membuat aplikasi mobile cross-platform dengan Flutter dan Dart. Dari basic hingga publikasi di App Store.',
        category_id: 5,
        rating: 4.7,
        price: 2800000.00,
        credits: 55,
        image_url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
        institution: 'Mobile Dev Institute',
        is_trending: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Startup Founder Masterclass',
        description: 'Panduan lengkap membangun startup dari nol hingga sukses. Mencakup business model, funding, dan scaling strategy.',
        category_id: 6,
        rating: 4.8,
        price: 3500000.00,
        credits: 65,
        image_url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
        institution: 'Startup School',
        is_trending: '0',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
}; 