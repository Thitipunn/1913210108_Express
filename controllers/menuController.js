const Menu = require('../models/menu');


// exports.menu = async (req, res, next) => {

//     const menu = await Menu.find().select('+name -price');

//     res.status(200).json({
//         data: menu
//     })
//   };

  exports.menu = async (req, res, next) => {

    //const menu = await Menu.find().where('price').gt(150);

    const menu = await Menu.find().populate('shop')

    res.status(200).json({
        data: menu
    })
  };
