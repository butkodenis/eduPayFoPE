const router = require('express').Router();
const contractController = require('../Controllers/contractController');

router.post('/contract/create', contractController.createContract);
router.get('/contracts', contractController.getAllContracts);

module.exports = router;
