const Course = require('../Model/Courses');

const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({ where: { id } });

    res.status(200).json({ course });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const { typeCourse, name, duration, price, points, department, date_start, date_end } =
      req.body;

    await Course.create({
      typeCourse,
      name,
      duration,
      price,
      points,
      department,
      date_start,
      date_end,
    });

    res.status(201).json({ message: 'Курс успішно створений' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();

    res.status(200).json({ courses });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { typeCourse, name, duration, price, points, department, date_start, date_end } =
      req.body;

    await Course.update(
      {
        typeCourse,
        name,
        duration,
        price,
        points,
        department,
        date_start,
        date_end,
      },
      { where: { id } },
    );

    res.status(200).json({ message: 'Курс успішно оновлений' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.destroy({ where: { id } });

    res.status(200).json({ message: 'Курс успішно видалений' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCourse, createCourse, getAllCourses, updateCourse, deleteCourse };
