'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assignmentsubmissions', {
      submission_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      assignment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'assignments',
          key: 'assignment_id'
        },
        allowNull: true
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        },
        allowNull: true
      },
      submission_content: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM('pending', 'grading', 'graded', 'late', 'resubmitted'),
        allowNull: false,
        defaultValue: 'pending'
      },
      grade: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      feedback: {
        type: Sequelize.TEXT
      },
      submitted_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      graded_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('assignmentsubmissions');
  }
};
