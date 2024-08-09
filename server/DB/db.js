const { Sequelize } = require('sequelize');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: 'postgres',
  port: 5432,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('База данных подключена!');

    // Синхронизация таблиц
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('Таблицы синхронизированы!');
  })
  .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
  });

module.exports = sequelize;
