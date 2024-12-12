'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assignments', [
      {
        assignment_id: 1,
        course_id: 1,
        title: 'Membuat Portfolio Website',
        description: 'Buatlah website portfolio personal menggunakan HTML, CSS, dan JavaScript. Website harus responsive dan memiliki minimal 4 section.',
        due_date: '2024-01-20 00:00:00',
        created_at: new Date()
      },
      {
        assignment_id: 2,
        course_id: 1,
        title: 'React Shopping Cart',
        description: 'Implementasikan fitur shopping cart menggunakan React dan Redux. Termasuk fitur add/remove item dan kalkulasi total.',
        due_date: '2024-01-25 00:00:00',
        created_at: new Date()
      },
      {
        assignment_id: 3,
        course_id: 2,
        title: 'Analisis Data COVID-19',
        description: 'Lakukan analisis data COVID-19 menggunakan Python dan Pandas. Visualisasikan trend dan buat prediksi sederhana.',
        due_date: '2024-01-22 00:00:00',
        created_at: new Date()
      },
      {
        assignment_id: 4,
        course_id: 2,
        title: 'Image Classification dengan TensorFlow',
        description: 'Buat model CNN untuk klasifikasi gambar menggunakan dataset CIFAR-10. Evaluasi performa dan optimasi model.',
        due_date: '2024-01-28 00:00:00',
        created_at: new Date()
      },
      {
        assignment_id: 5,
        course_id: 3,
        title: 'Digital Marketing Campaign',
        description: 'Rancang dan implementasikan kampanye digital marketing untuk brand fiktif. Sertakan strategi content dan social media.',
        due_date: '2024-01-15 00:00:00',
        created_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assignments', null, {});
  }
}; 