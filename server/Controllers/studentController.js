const Student = require('../Model/Students.js');

const createStudent = async (req, res) => {
  try {
    const {
      studentFirstName,
      studentLastName,
      studentMiddleName,
      studentPhone,
      passportDate,
      passportSeries,
      passportNumber,
      passportLocation,
    } = req.body;

    // Проверка на уникальность
    const existingStudent = await Student.findOne({
      where: {
        passportSeries,
        passportNumber,
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
      passportDate,
      passportSeries,
      passportNumber,
      passportLocation,
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

const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      studentFirstName,
      studentLastName,
      studentMiddleName,
      studentPhone,
      passportDate,
      passportSeries,
      passportNumber,
      passportLocation,
    } = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: 'Студент не знайдений' });
    }

    student.firstName = studentFirstName;
    student.lastName = studentLastName;
    student.middleName = studentMiddleName;
    student.phone = studentPhone;
    student.passportDate = passportDate;
    student.passportSeries = passportSeries;
    student.passportNumber = passportNumber;
    student.passportLocation = passportLocation;

    await student.save();

    res.status(200).json({ message: 'Студент успішно оновлений', student });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStudent, getAllStudents, editStudent };
