const router = require('express').Router();
const authController = require('../Controllers/authController');

router.post('/auth/login', authController.login);
router.get('/auth/logout', authController.logout);

module.exports = router;
