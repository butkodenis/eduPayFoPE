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
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: 'courses',
    timestamps: true,
  },
);

module.exports = Course;
