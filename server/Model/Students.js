const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db.js');

const Student = sequelize.define(
  'Student',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    passportSeries: {
      type: DataTypes.STRING,
    },
    passportNumber: {
      type: DataTypes.NUMBER,
    },
    passpotDate: {
      type: DataTypes.DATEONLY,
    },
    passportLocation: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'students',
    timestamps: false,
  },
);

module.exports = Student;
