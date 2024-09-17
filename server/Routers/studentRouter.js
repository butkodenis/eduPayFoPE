const router = require('express').Router();
const studentController = require('../Controllers/studentController');

// router.get('/student/:id', studentController.getStudent);
router.post('/student/create', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.put('/student/update/:id', studentController.editStudent);
router.delete('/student/delete/:id', studentController.deleteStudent);

module.exports = router;
