const { Sequelize } = require("sequelize");
const env = require("dotenv");
env.config();

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
