var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const passportJwt = require('../middleware/passportJWT');

/* GET users listing. */
router.get('/', userController.index);

router.get('/bio',userController.bio);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุลด้วย"),
    body('email').not().isEmpty().withMessage("กรุณาใส่อีเมลด้วย").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณาใส่รหัสผ่านด้วย").isLength({min:5}).withMessage("รหัสผ่านต้อง5ตัวอักษรขึ้นไป"),
],userController.register);

router.post('/login',[
    body('email').not().isEmpty().withMessage("กรุณาใส่อีเมลด้วย").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณาใส่รหัสผ่านด้วย").isLength({min:5}).withMessage("รหัสผ่านต้อง5ตัวอักษรขึ้นไป"),
],userController.login);

router.get('/me',[passportJwt.isLogIn],userController.profile);

module.exports = router;
