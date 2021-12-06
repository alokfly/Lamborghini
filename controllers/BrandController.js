var ObjectId = require("mongodb").ObjectID;
const Brand = require("../models/Brand");

module.exports.addBrand = async (req, res) => {
  const { brandName } = req.body;
  try {
    if (brandName === "") {
      res.status(400).json({ msg: "Brand Name is required" });
    } else {
      const addBrand = await Brand.create({
        brandName,
      });
      res.status(200).json({ msg: "Brand successfully submitted", addBrand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getBrand = async (req, res) => {
  try {
    const getBrand = await Brand.find({});
    return res.status(200).json(getBrand);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateBrand = async (req, res) => {
  const { brandName } = req.body;
  try {
    if (brandName === "") {
      res.status(400).json({ msg: "Brand Name is required" });
    } else {
      const updateBrand = await Brand.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          brandName,
        }
      );
      res.status(200).json({ msg: "Brand successfully Updated", updateBrand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteBrand = async (req, res) => {
  try {
    const getBrand = await Brand.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res
      .status(200)
      .json({ msg: "Brand successfully deleted", getBrand });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
