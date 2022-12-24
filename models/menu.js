const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema(
{
    name:{type:String, require:true, trim:true},
    price:{type:Number},
    shop:{type:Schema.Types.ObjectId,ref: 'Shop'}
},
{collection:"menus",timestamps:true})

const menu = mongoose.model('menus',menuSchema);
module.exports = menu;
