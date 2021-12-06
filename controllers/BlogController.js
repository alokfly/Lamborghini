var ObjectId = require("mongodb").ObjectID;
const Blog = require("../models/Blog");

module.exports.addBlog = async (req, res) => {
  const blogImage = req.file ? req.file.path : null;
  const { title, author_name, date, description } = req.body;
  try {
    if (title === "") {
      res.status(400).json({ msg: "title is required" });
    }
    if (author_name === "") {
      res.status(400).json({ msg: "author name is required" });
    }
    if (date === "") {
      res.status(400).json({ msg: "date is required" });
    }
    if (description === "") {
      res.status(400).json({ msg: "description is required" });
    } else {
      const addBlog = await Blog.create({
        title,
        author_name,
        date,
        description,
        image: blogImage,
      });
      res.status(200).json({ msg: "Blog successfully submitted", addBlog });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getBlog = async (req, res) => {
  try {
    const getBlog = await Blog.find({});
    return res.status(200).json(getBlog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateBlog = async (req, res) => {
  const { title, author_name, date, description, currentImage } = req.body;
  const blogImage = req.file ? req.file.path : currentImage;
  try {
    if (title === "") {
      res.status(400).json({ msg: "title is required" });
    }
    if (author_name === "") {
      res.status(400).json({ msg: "author name is required" });
    }
    if (date === "") {
      res.status(400).json({ msg: "date is required" });
    }
    if (description === "") {
      res.status(400).json({ msg: "description is required" });
    } else {
      const updateBlog = await Blog.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          title,
          author_name,
          date,
          description,
          image: blogImage,
        }
      );
      res.status(200).json({ msg: "Blog successfully Updated" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const getBlog = await Blog.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "Blog successfully deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
