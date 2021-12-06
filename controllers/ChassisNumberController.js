var ObjectId = require("mongodb").ObjectID;
const ChassisNumber = require("../models/ChassisNumber");

module.exports.addChassisNumber = async (req, res) => {
  const { number } = req.body;
  try {
    if (number === "") {
      res.status(400).json({ msg: "number Name is required" });
    } else {
      const addNumber = await ChassisNumber.create({
        number,
      });
      res.status(200).json({ msg: "Number successfully submitted", addNumber });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getChassisNumber = async (req, res) => {
  try {
    const getChassisNumber = await ChassisNumber.find({});
    return res.status(200).json(getChassisNumber);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updategetChassisNumber = async (req, res) => {
  const { number } = req.body;
  try {
    if (number === "") {
      res.status(400).json({ msg: "Number is required" });
    } else {
      const updateChassisNumber = await ChassisNumber.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          number,
        }
      );
      res.status(200).json({
        msg: "Chassis Number successfully Updated",
        updateChassisNumber,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteChassisNumber = async (req, res) => {
  try {
    const getChassisNumber = await ChassisNumber.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "Chassis Number successfully deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
