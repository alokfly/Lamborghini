const ContactUs = require("../models/ContactUs");
const Service = require("../models/Service");

module.exports.contactUs = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if (name === "") {
      res.status(400).json({ msg: "Name is required" });
    }
    if (email === "") {
      res.status(400).json({ msg: "email is required" });
    }
    if (message === "") {
      res.status(400).json({ msg: "message is required" });
    } else {
      const addData = await ContactUs.create({
        name,
        email,
        message,
      });
      res.status(200).json({ msg: "Form successfully submitted", addData });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.service = async (req, res) => {
  const { name, email, message, phone } = req.body;
  try {
    if (name === "") {
      res.status(400).json({ msg: "Name is required" });
    }
    if (email === "") {
      res.status(400).json({ msg: "email is required" });
    }
    if (phone === "") {
      res.status(400).json({ msg: "phone number is required" });
    }
    if (message === "") {
      res.status(400).json({ msg: "message is required" });
    } else {
      const addData = await Service.create({
        name,
        email,
        message,
        phone,
      });
      res.status(200).json({ msg: "Form successfully submitted", addData });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
