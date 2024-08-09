const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const Users = require('./Model/Users'); // Подключение модели пользователя

const sequelize = require('./DB/db'); // Подключение к базе данных

const { NODE_PORT, VITE_BASE_URL } = process.env;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello from the server!  ');
});

app.use('/api', require('./Routers/userRouter'));

app.listen(NODE_PORT, () => {
  console.log(`Сервер запущен на порту ${NODE_PORT}`);
});
