const { deleteOne } = require("../models/company");
const staff = require("../models/staff");
const Staff = require("../models/staff");

exports.Staff = async (req, res, next) => {
  const staff = await Staff.find().sort({ _id: -1 });

  res.status(200).json({
    data: staff,
  });
};

exports.Show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findOne({
      _id: id,
    });

    if (!staff) {
      throw new Error("Staff not found");
    } else {
      res.status(200).json({
        data: staff,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error Message" + error.message,
    });
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const staff = await Staff.deleteOne({
      _id: id,
    });

    if (staff.deletedCount === 0) {
      throw new Error("ไม่พบข้อมูลผู้ใช้งาน");
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

exports.insert = async (req, res, next) => {
  const { name, salary } = req.body;

  let staff = new Staff({
    name: name,
    salary: salary,
  });

  await staff.save();

  res.status(200).json({
    message: "Data has been added",
  });
};

exports.update = async (req, res, next) => {
try {
    const { id } = req.params;
    const { name, salary } = req.body;

    /* แบบ 1 
     const staff = await Staff.findById(id);
     staff.name = name;
     staff.salary = sal 
     await staff.save();
    */

     /* แบบ2
     const staff = await Staff.findByIdAndUpdate(id,{
        name : name,
        salary : salary
     })
    */

    const staff = await Staff.updateOne({_id:id},{
        name : name,
        salary : salary
    })

    console.log(staff);

    res.status(200).json({
      message: "Data has been updated",
    });
} catch (error) {
    res.status(400).json({
        message: "Error found " + error.message,
      });
}
  };
