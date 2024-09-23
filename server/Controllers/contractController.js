const Contract = require('../Model/Contracts.js');

const createContract = async (req, res) => {
  try {
    const { studentId, companyId, courseId, date, part } = req.body;

    const newContract = await Contract.create({
      studentId,
      companyId,
      courseId,
      date,
      part,
    });

    res.status(201).json({ message: 'Договір успішно створений', contract: newContract });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll();
    res.status(200).json({ contracts });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContract, getAllContracts };
