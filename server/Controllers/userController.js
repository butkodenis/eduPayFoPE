const Users = require('../Model/Users.js');
const bcrypt = require('bcryptjs');

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: 'Успішна аутентифікація користувача' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, firstname, secondname, lastname, phone } = req.body;
    const existingUser = await Users.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'Користувач з таким email вже існує' });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    await Users.create({ email, password: hashedPassword, firstname, secondname, lastname, phone });

    res.status(201).json({ message: 'Користувач успішно створений' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    res.status(200).json({ message: 'test all users' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser, getAllUsers, createUser };
