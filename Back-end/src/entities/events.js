const { DataTypes } = require("sequelize");
const sequelize = require("../frameworks/sequelize");

const events = sequelize.define("events", {
  title: DataTypes.STRING,
  dataStart: DataTypes.DATE,
  dataEnd: DataTypes.DATE,
  description: DataTypes.STRING,
  imageURL: DataTypes.STRING,
});

module.exports = events;
