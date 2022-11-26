exports.index = (req, res, next) => {
    //res.send('Erorr');
    res.status(200).json({
      Fullname:"Thitipun Damdenngam"
    })
  }
exports.bio = (req, res, next) => {
    //res.send('Erorr');
    res.status(200).json({
      fullname:"Thitipun Damdenngam",
      nickname:"Be",
      hobby:"Reading",
      gitusername:"Thitipunn"
    })
  }