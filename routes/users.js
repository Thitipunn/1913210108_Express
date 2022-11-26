var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Erorr');
  res.status(200).json({
    Fullname:"Thitipun Damdenngam"
  })
});

router.get('/bio', function(req, res, next) {
  //res.send('Erorr');
  res.status(200).json({
    fullname:"Thitipun Damdenngam",
    nickname:"Be",
    hobby:"Reading",
    gitusername:"Thitipunn"
  })
});

module.exports = router;
