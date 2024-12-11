'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enrollments', {
      enrollment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        },
        allowNull: true
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'courses',
          key: 'course_id'
        },
        allowNull: true
      },
      progress: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      completion_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      enrolled_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Menambahkan unique constraint untuk mencegah duplikasi enrollment
    await queryInterface.addConstraint('enrollments', {
      fields: ['student_id', 'course_id'],
      type: 'unique',
      name: 'unique_student_course'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('enrollments');
  }
};
