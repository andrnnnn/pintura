'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assignmentsubmissions', [
      {
        submission_id: 1,
        assignment_id: 1,
        student_id: 4,
        submission_content: 'https://github.com/ahmad/portfolio-website\n\nWebsite portfolio sudah selesai dibuat dengan fitur:\n- Responsive design\n- Dark/Light mode\n- Animasi smooth scroll\n- Contact form dengan validasi',
        status: 'graded',
        grade: 92.50,
        feedback: 'Implementasi sangat baik! Responsive design berfungsi dengan baik di semua device. Tambahkan meta tags untuk SEO.',
        submitted_at: new Date('2024-01-18 14:30:00'),
        graded_at: new Date('2024-01-19 10:00:00')
      },
      {
        submission_id: 2,
        assignment_id: 1,
        student_id: 5,
        submission_content: 'https://github.com/maya/my-portfolio\n\nPortfolio website features:\n- Minimalist design\n- CSS Grid layout\n- Portfolio gallery\n- Interactive elements',
        status: 'graded',
        grade: 88.00,
        feedback: 'Design yang clean dan professional. Perlu perbaikan pada mobile responsiveness dan loading time.',
        submitted_at: new Date('2024-01-19 09:15:00'),
        graded_at: new Date('2024-01-19 16:00:00')
      },
      {
        assignment_id: 2,
        student_id: 4,
        submission_content: 'https://github.com/ahmad/react-shopping-cart\n\nFitur yang diimplementasikan:\n- Add/remove items\n- Update quantity\n- Cart persistence\n- Checkout simulation',
        status: 'pending',
        submitted_at: new Date('2024-01-24 23:45:00')
      },
      {
        assignment_id: 3,
        student_id: 5,
        submission_content: 'https://colab.research.google.com/drive/covid19-analysis\n\nAnalisis meliputi:\n- Trend kasus per wilayah\n- Visualisasi dengan matplotlib\n- Prediksi menggunakan moving average',
        status: 'grading',
        submitted_at: new Date('2024-01-21 18:20:00')
      },
      {
        assignment_id: 5,
        student_id: 4,
        submission_content: 'Link Presentasi: https://slides.com/ahmad/digital-campaign\n\nKampanye untuk brand "EcoStyle":\n- Content calendar 3 bulan\n- Social media strategy\n- Influencer collaboration plan\n- Budget allocation',
        status: 'late',
        grade: 78.00,
        feedback: 'Strategi yang solid namun submission terlambat. Perhatikan deadline selanjutnya.',
        submitted_at: new Date('2024-01-16 01:30:00'),
        graded_at: new Date('2024-01-17 11:00:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assignmentsubmissions', null, {});
  }
}; 