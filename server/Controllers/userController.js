const getUserInfo = async (req, res) => {
  try {
    res.status(200).json({ message: 'Успішна аутентифікація користувача' });
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

module.exports = { getUserInfo, getAllUsers };
