require('dotenv').config(); // Load environment variables from .env file
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const configJson = require('../../config/config.json'); // Adjust the path as needed

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configJson[env];
const db = {};

let sequelize;

// Initialize Sequelize based on environment variable or default configuration
if (config.use_env_variable) {
  if (!process.env[config.use_env_variable]) {
    console.error(`Environment variable ${config.use_env_variable} is not set`);
    process.exit(1); // Exit the application if the variable is not set
  }
  
  console.log('Connecting to database using:', process.env[config.use_env_variable]); // Debug log
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
    logging: config.logging === true ? console.log : false,
  });
} else {
  console.log('Connecting to database using explicit credentials'); // Debug log
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging === true ? console.log : false,
  });
}

// Dynamically import all models in the directory
fs.readdirSync(__dirname)
  .filter(file =>
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up associations if defined in the models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add Sequelize and sequelize instances to the exported db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
