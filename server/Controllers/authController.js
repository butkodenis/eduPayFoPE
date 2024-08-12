const sequelize = require('../DB/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const User = require('../Models/User');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ where: { email } }); // Поиск пользователя в базе данных переделать на async/await
    if (candidate) {
      return res.status(400).json({ message: 'Користувач з такою поштою вже існує' });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword });
    return res.status(201).json({ message: 'Користувач успішно зареєстрований' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
