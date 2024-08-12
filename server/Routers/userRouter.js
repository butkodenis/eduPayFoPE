const router = require('express').Router();
const userController = require('../Controllers/userController');

router.get('/user/info', userController.getUser);
router.post('/user/create', userController.createUser);

module.exports = router;
