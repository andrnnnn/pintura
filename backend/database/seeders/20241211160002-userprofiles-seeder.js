'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userprofiles', [
      {
        user_id: 1,
        username: 'admin_pintar',
        image_url: 'https://randomuser.me/api/portraits/men/1.jpg',
        date_of_birth: '1990-01-15',
        gender: 'Male',
        phone_number: '+6281234567890',
        allow_phone_notifications: true,
        city: 'Jakarta',
        education: 'S2 Teknologi Informasi',
        company: 'Pintar Education',
        role: 'System Administrator',
        bio: 'Platform administrator dengan pengalaman 8+ tahun dalam edtech',
        linkedin_url: 'https://linkedin.com/in/admin-pintar',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 2,
        username: 'dr_budi',
        image_url: 'https://randomuser.me/api/portraits/men/2.jpg',
        date_of_birth: '1985-03-20',
        gender: 'Male',
        phone_number: '+6281234567891',
        allow_phone_notifications: true,
        city: 'Bandung',
        education: 'S3 Computer Science',
        company: 'Institut Teknologi Bandung',
        role: 'Senior Instructor',
        bio: 'Dosen dan praktisi dengan spesialisasi di Machine Learning dan AI',
        linkedin_url: 'https://linkedin.com/in/dr-budi',
        youtube_url: 'https://youtube.com/@dr.budi',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 3,
        username: 'siti_teach',
        image_url: 'https://randomuser.me/api/portraits/women/1.jpg',
        date_of_birth: '1988-07-12',
        gender: 'Female',
        phone_number: '+6281234567892',
        allow_phone_notifications: true,
        city: 'Surabaya',
        education: 'S2 Data Science',
        company: 'Universitas Airlangga',
        role: 'Data Science Instructor',
        bio: 'Passionate educator with 10+ years experience in data science',
        linkedin_url: 'https://linkedin.com/in/siti-aminah',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 4,
        username: 'ahmad_learn',
        image_url: 'https://randomuser.me/api/portraits/men/3.jpg',
        date_of_birth: '1999-05-25',
        gender: 'Male',
        phone_number: '+6281234567893',
        allow_phone_notifications: true,
        city: 'Jakarta',
        education: 'S1 Informatika',
        company: 'Startup Tech',
        role: 'Junior Developer',
        bio: 'Passionate learner focusing on web development',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 5,
        username: 'maya_student',
        image_url: 'https://randomuser.me/api/portraits/women/2.jpg',
        date_of_birth: '2000-08-30',
        gender: 'Female',
        phone_number: '+6281234567894',
        allow_phone_notifications: true,
        city: 'Yogyakarta',
        education: 'S1 Sistem Informasi',
        role: 'College Student',
        bio: 'Enthusiastic student interested in UI/UX design',
        instagram_url: 'https://instagram.com/maya_designs',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userprofiles', null, {});
  }
}; 