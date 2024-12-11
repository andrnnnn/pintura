'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      course_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoriescourses',
          key: 'category_id'
        },
        allowNull: true
      },
      rating: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      credits: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5
      },
      image_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      institution: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      is_trending: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '0'
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};
