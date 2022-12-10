var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

router.get('/', staffController.Staff);

router.post('/', staffController.insert);

module.exports = router;