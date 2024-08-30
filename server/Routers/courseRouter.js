const router = require('express').Router();
const courseController = require('../Controllers/courseController');

router.get('/course/:id', courseController.getCourse);
router.post('/course/create', courseController.createCourse);
router.get('/courses', courseController.getAllCourses);
router.put('/course/update/:id', courseController.updateCourse);
router.delete('/course/delete/:id', courseController.deleteCourse);

module.exports = router;
