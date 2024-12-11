"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("userroles", {
            role_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            role_name: {
                type: Sequelize.ENUM("admin", "instructor", "student", "counselor", "mentor"),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("userroles");
    },
};
