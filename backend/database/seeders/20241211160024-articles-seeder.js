'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles', [
      {
        id: 1,
        title: 'Memulai Karir sebagai Full Stack Developer',
        author_name: 'Dr. Budi Prakoso',
        author_image_url: 'https://randomuser.me/api/portraits/men/2.jpg',
        date: new Date('2024-01-10'),
        category: 'Web Development',
        description: 'Panduan lengkap untuk memulai karir sebagai Full Stack Developer di tahun 2024',
        created_at: new Date('2024-01-10'),
        updated_at: new Date('2024-01-10')
      },
      {
        id: 2,
        title: 'Tren Data Science dan AI di 2024',
        author_name: 'Siti Aminah',
        author_image_url: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: new Date('2024-01-12'),
        category: 'Data Science',
        description: 'Analisis mendalam tentang tren dan perkembangan terbaru di bidang Data Science dan AI',
        created_at: new Date('2024-01-12'),
        updated_at: new Date('2024-01-12')
      },
      {
        id: 3,
        title: 'Tips Membuat Portfolio UI/UX yang Menarik',
        author_name: 'Maya Student',
        author_image_url: 'https://randomuser.me/api/portraits/women/2.jpg',
        date: new Date('2024-01-15'),
        category: 'UI/UX Design',
        description: 'Panduan praktis untuk membuat portfolio UI/UX yang dapat menarik perhatian recruiter',
        created_at: new Date('2024-01-15'),
        updated_at: new Date('2024-01-15')
      },
      {
        id: 4,
        title: 'Optimasi Performa React Application',
        author_name: 'Ahmad Student',
        author_image_url: 'https://randomuser.me/api/portraits/men/3.jpg',
        date: new Date('2024-01-17'),
        category: 'Web Development',
        description: 'Teknik dan strategi untuk mengoptimalkan performa aplikasi React',
        created_at: new Date('2024-01-17'),
        updated_at: new Date('2024-01-17')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {});
  }
}; 