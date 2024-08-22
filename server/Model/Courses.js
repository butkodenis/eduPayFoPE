const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db.js');

const Course = sequelize.define(
  'Course',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    typeCourse: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    points: {
      type: DataTypes.INTEGER,
    },
    department: {
      type: DataTypes.STRING,
    },
    date_start: {
      type: DataTypes.DATEONLY,
    },
    date_end: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    tableName: 'courses',
    timestamps: false,
  },
);

module.exports = Course;
