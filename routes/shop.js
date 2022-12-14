var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const menuController = require('../controllers/menuController')

router.get('/', shopController.Shop);

router.get('/menu', menuController.menu);

router.get('/:id', shopController.findId);

router.post('/', shopController.insert);

module.exports = router;