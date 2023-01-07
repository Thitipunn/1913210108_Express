const shop = require("../models/shop");
const Shop = require("../models/shop");
const config = require("../config/index");

exports.Shop = async (req, res, next) => {
  const shops = await Shop.find().select('name photo location').sort({_id:-1});

  const shopWithPhotoDomain = shops.map((shop,Shop)=>{
    return{
        id:shop._id,
        name:shop.name,
        photo: config.DOMAIN + '/images/' + shop.photo,
        location:shop.location,

    };
  });

  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

exports.findId = async (req, res, next) => {

  const { id } = req.params;

  const menu = await Shop.findById({_id:id}).populate('menu')

  res.status(200).json({
      data: menu
  })
};
