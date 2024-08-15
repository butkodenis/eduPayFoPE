const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const Users = require('./Model/Users'); // Подключение модели пользователя

const sequelize = require('./DB/db'); // Подключение к базе данных

const { NODE_PORT, VITE_BASE_URL } = process.env;

app.use(
  cors({
    origin: 'http://localhost:5173', // Укажите origin, откуда вы делаете запросы
    credentials: true, // Включите передачу cookies или других учетных данных
  }),
);
app.use(cookieParser());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello from the server!  ');
});

app.use('/api', require('./Routers/userRouter'));
app.use('/api', require('./Routers/authRoutes'));

app.listen(NODE_PORT, () => {
  console.log(`Сервер запущен на порту ${NODE_PORT}`);
});
