const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  address: {
    province: String,
  }
},{collection:"setting"});

const companys = mongoose.model('companys',companySchema)
module.exports = companys;