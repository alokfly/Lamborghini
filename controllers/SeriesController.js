var ObjectId = require("mongodb").ObjectID;
const Series = require("../models/Series");

module.exports.addSeries = async (req, res) => {
  const { seriesName } = req.body;
  try {
    if (seriesName === "") {
      res.status(400).json({ msg: "Series Name is required" });
    } else {
      const addSeries = await Series.create({
        seriesName,
      });
      res.status(200).json({ msg: "Series successfully submitted", addSeries });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getSeries = async (req, res) => {
  try {
    const getSeries = await Series.find({});
    return res.status(200).json(getSeries);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateSeries = async (req, res) => {
  const { seriesName } = req.body;
  try {
    if (seriesName === "") {
      res.status(400).json({ msg: "Series Name is required" });
    } else {
      const updateSeries = await Series.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          seriesName,
        }
      );
      res
        .status(200)
        .json({ msg: "Series successfully Updated", updateSeries });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteSeries = async (req, res) => {
  try {
    const getSeries = await Series.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res
      .status(200)
      .json({ msg: "series successfully deleted", getSeries });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
