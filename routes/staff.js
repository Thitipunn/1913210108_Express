var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');

router.get('/', staffController.Staff);

router.get('/:id', staffController.Show);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body('salary').not().isEmpty().withMessage("กรุณาใส่รหัสผ่าน").isNumeric().withMessage("กรุณาใส่เงินเดือนเป็นตัวเลข"),
], staffController.insert);

router.delete('/:id', staffController.destroy);

router.put('/:id', staffController.update);

module.exports = router;