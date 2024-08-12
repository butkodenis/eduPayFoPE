const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const Users = require('../Model/Users.js');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // перевірка на валідність введених даних
    if (!email || !password) {
      return res.status(400).json({ message: 'Введіть email та пароль' });
    }

    // перевірка наявності користувача в базі даних
    const existingUser = await Users.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(400).json({ message: 'Користувача з таким email не знайдений' });
    }
    // перевірка введеного паролю з паролем користувача
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Невірний пароль' });
    }

    // створення токена для користувача
    const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, SECRET_KEY, {
      expiresIn: '1h',
    });
    // відправка токена на клієнт
    res.cookie('token', token, { withCredentials: true, httpOnly: false });

    res.status(200).json({ message: 'Успішний вхід', user: existingUser, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login };
