"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("articles", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            author_name: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            author_image_url: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            category: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("articles");
    }
}; 