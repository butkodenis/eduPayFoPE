const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db.js');

const Users = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    secondname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
    },
    roles_id: {
      type: DataTypes.UUID,
    },
    description: {
      type: DataTypes.STRING,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  },
);

module.exports = Users;
