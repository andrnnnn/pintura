'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      google_id: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      credits: {
        type: Sequelize.INTEGER,
        defaultValue: 95
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'userroles',
          key: 'role_id'
        },
        allowNull: true
      },
      email_verified: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '0'
      },
      email_verification_token: {
        type: Sequelize.STRING(6),
        allowNull: true
      },
      email_verification_token_expires: {
        type: Sequelize.DATE,
        allowNull: true
      },
      reset_password_token: {
        type: Sequelize.STRING(6),
        allowNull: true
      },
      reset_password_token_expires: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('users');
  }
};
