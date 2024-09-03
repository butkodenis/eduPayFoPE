const Student = require('../Model/Students.js');

const createStudent = async (req, res) => {
  try {
    const {
      studentFirstName,
      studentLastName,
      studentMiddleName,
      studentPhone,
      passpotDate,
      passpotSeries,
      passpotNumber,
      passpotLocation,
    } = req.body;

    // Проверка на уникальность
    const existingStudent = await Student.findOne({
      where: {
        passpotSeries,
        passpotNumber,
      },
    });

    if (existingStudent) {
      return res.status(409).json({ message: 'Студент з такими параметрами уже существует' });
    }

    const newStudent = await Student.create({
      firstName: studentFirstName,
      lastName: studentLastName,
      middleName: studentMiddleName,
      phone: studentPhone,
      passpotDate,
      passpotSeries,
      passpotNumber,
      passpotLocation,
    });

    res.status(201).json({ message: 'Студент успішно створений', student: newStudent });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json({ students });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStudent, getAllStudents };
