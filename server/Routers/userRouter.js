const router = require('express').Router();
const userController = require('../Controllers/userController');

router.get('/user/info', userController.getUserInfo);

module.exports = router;
