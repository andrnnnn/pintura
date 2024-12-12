'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('videocontents', [
      {
        id: 1,
        title: 'Introduction to React Hooks',
        description: 'Pengenalan dan implementasi React Hooks dasar seperti useState dan useEffect',
        url: 'https://www.youtube.com/embed/react-hooks-intro',
        tags: JSON.stringify(['react', 'hooks', 'frontend', 'javascript']),
        thumbnail_url: 'https://img.youtube.com/vi/react-hooks-intro/maxresdefault.jpg',
        date: new Date('2024-01-15'),
        duration: '45:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        title: 'Machine Learning with Python',
        description: 'Tutorial implementasi algoritma machine learning menggunakan Python dan scikit-learn',
        url: 'https://www.youtube.com/embed/machine-learning-python',
        tags: JSON.stringify(['python', 'machine learning', 'data science', 'AI']),
        thumbnail_url: 'https://img.youtube.com/vi/machine-learning-python/maxresdefault.jpg',
        date: new Date('2024-01-16'),
        duration: '60:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        title: 'UI/UX Design Principles',
        description: 'Prinsip-prinsip dasar dalam mendesain user interface dan user experience',
        url: 'https://www.youtube.com/embed/uiux-principles',
        tags: JSON.stringify(['ui', 'ux', 'design', 'figma']),
        thumbnail_url: 'https://img.youtube.com/vi/uiux-principles/maxresdefault.jpg',
        date: new Date('2024-01-17'),
        duration: '30:00',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('videocontents', null, {});
  }
}; 