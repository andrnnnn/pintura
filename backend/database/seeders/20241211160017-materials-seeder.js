'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materials', [
      {
        course_id: 1,
        type: 'video',
        content: 'https://www.youtube.com/embed/introduction-to-mern',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 1,
        type: 'text',
        content: '# Introduction to React\n\nReact is a JavaScript library for building user interfaces...',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 2,
        type: 'video',
        content: 'https://www.youtube.com/embed/machine-learning-basics',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 2,
        type: 'quiz',
        content: JSON.stringify({
          questions: [
            {
              question: 'What is Machine Learning?',
              options: [
                'A type of computer hardware',
                'A programming language',
                'A subset of artificial intelligence',
                'A database management system'
              ],
              correct_answer: 2
            }
          ]
        }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 4,
        type: 'text',
        content: '# UI/UX Design Principles\n\nUser Interface (UI) design focuses on the visual elements...',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materials', null, {});
  }
}; 