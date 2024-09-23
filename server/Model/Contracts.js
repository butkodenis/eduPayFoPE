const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db.js');

const Contract = sequelize.define(
  'Contract',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.UUID,
      foreginKey: true,
    },
    companyId: {
      type: DataTypes.UUID,
    },
    courseId: {
      type: DataTypes.UUID,
      foreginKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    part: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'contracts',
    timestamps: false,
  },
);

module.exports = Contract;
