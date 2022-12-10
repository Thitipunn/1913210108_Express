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
          throw new Error("Company not found");
        } else {
          res.status(200).json({
            data: company,
          });
        }
      } catch (error) {
        res.status(400).json({
          message: "Error Message " + error.message,
        });
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
        throw new Error("ไม่พบข้อมูลบริษัท");
      } else {
        res.status(200).json({
          message: "ลบข้อมูลเรียบร้อยแล้ว",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Error found " + error.message,
      });
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
    
        res.status(200).json({
          message: "Data has been updated",
        });
    } catch (error) {
        res.status(400).json({
            message: "Error found " + error.message,
          });
    }
      };