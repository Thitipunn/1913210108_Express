const User = require("../models/user");

exports.index = (req, res, next) => {
  //res.send('Erorr');
  res.status(200).json({
    Fullname: "Thitipun Damdenngam",
  });
};
exports.bio = (req, res, next) => {
  //res.send('Erorr');
  res.status(200).json({
    fullname: "Thitipun Damdenngam",
    nickname: "Be",
    hobby: "Reading",
    gitusername: "Thitipunn",
  });
};
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existEmail = await User.findOne({ email: email });
    
    if (existEmail) {
      const error = new Error("อีเมลนี้มีผู้ใช้งานในระบบแล้ว")
      error.statusCode = 400
      throw error;
    }

    let user = new User();
    user.name = name;
    user.email = email;
    user.password = await user.encryptPassword(password);

    await user.save();

    res.status(201).json({
      message: "ลงทะเบียนเรียบร้อยแล้ว",
    });
  } catch (error) {
    next(error);
  }
};
