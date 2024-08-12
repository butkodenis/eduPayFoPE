const router = require('express').Router();
const userController = require('../Controllers/userController');
const verifyToken = require('../Middleware/AuthMiddleware');

router.get('/user/info', verifyToken, userController.getUser);
router.post('/user/create', userController.createUser);

module.exports = router;
