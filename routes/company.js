var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')
const passportJWT = require('../middleware/passportJWT');
const isAdmin = require('../middleware/checkAdmin');

router.get('/',[passportJWT.isLogIn],[isAdmin.isAdmin], companyController.company);

router.get('/:id', companyController.Show);

router.post('/', companyController.insert);

router.delete('/:id', companyController.destroy);

router.put('/:id', companyController.update);

module.exports = router;