'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('userprofiles', {
      profile_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      image_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM('Male', 'Female'),
        allowNull: true
      },
      phone_number: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      allow_phone_notifications: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      education: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      company: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      role: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      linkedin_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      youtube_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      instagram_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      facebook_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      line_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      twitter_url: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('userprofiles');
  }
};
