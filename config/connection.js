require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  // Database name
  'ecommerce_db',
  // User
  'root',
  // Password
  'Ekh12518!',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
