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
        image_url: 'https://www.unikaksha.com/wp-content/uploads/2021/12/Full-Stack-Developer-980x462-1.png',
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
        image_url: 'https://image.web.id/images/Machine-Learning.jpg',
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
        image_url: 'https://www.esasnews.com/media/2024/05/what-is-digital-marketing-1-1536x804.png',
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
        image_url: 'https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/64664e9cd07202af8bcdc5e4_5757453-p-1600.jpg',
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
        image_url: 'https://opengeekslab.com/wp-content/uploads/2021/04/Top-11-Reasons-Why-You-Should-Jump-into-Flutter-App-Development.png',
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
        image_url: 'https://iie.smu.edu.sg/sites/iie.smu.edu.sg/files/2021-08/startup%20founder%20thumbnail1.png',
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