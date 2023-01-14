const Company = require('../models/company');


exports.company = async (req, res, next) => {

    const company = await Company.findOne();

    res.status(200).json({
        data: company
    })
  };

exports.Show = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        const company = await Company.findOne({
          _id: id,
        });
    
        if (!company) {
          const error = new Error("ไม่พบข้อมูลบริษัท")
          error.statusCode = 400
          throw error
        } else {
          res.status(200).json({
            data: company,
          });
        }
      } catch (error) {
        next(error)
      }
}

exports.insert = async (req, res, next) => {
    const { name, address:{province} } = req.body;
  
    let company = new Company({
      name: name,
      province:province
    });
  
    await company.save();
  
    res.status(200).json({
      message: "Data has been added",
    });
  };

  exports.destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const company = await Company.deleteOne({
        _id: id,
      });
  
      if (company.deletedCount === 0) {
        const error = new Error("ไม่พบข้อมูลบริษัท")
        error.statusCode = 400
        throw error
      } else {
        res.status(200).json({
          message: "ลบข้อมูลเรียบร้อยแล้ว",
        });
      }
    } catch (error) {
      next(error)
    }
  };

  exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, address:{province} } = req.body;
    
         const company = await Company.findByIdAndUpdate(id,{
            name : name,
            province:province
         })
         if(!company){
          const error = new Error("ไม่พบข้อมูลบริษัท")
          error.statusCode = 400
          throw error
         }
    
        res.status(200).json({
          message: "Data has been updated",
        });
    } catch (error) {
      next(error)
    }
      };