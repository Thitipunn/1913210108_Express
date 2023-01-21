var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const menuController = require('../controllers/menuController')
const { body } = require('express-validator');

router.get('/', shopController.Shop);

router.get('/menu', menuController.menu);

router.get('/:id', shopController.findId);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาใส่ชื่อร้าน"),
    body('location').not().isEmpty().withMessage("กรุณาใส่ที่อยู่ร้าน"),
    body('location.lat').not().isEmpty().withMessage("กรูณาใส่ข้อมูล").isNumeric().withMessage("กรุณาใส่เป็นตัวเลข"),
    body('location.lgn').not().isEmpty().withMessage("กรูณาใส่ข้อมูล").isNumeric().withMessage("กรุณาใส่เป็นตัวเลข"),
], shopController.insert);

module.exports = router;