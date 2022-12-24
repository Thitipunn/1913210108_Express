const Menu = require('../models/menu');


exports.menu = async (req, res, next) => {

    const menu = await Menu.find();

    res.status(200).json({
        data: menu
    })
  };
