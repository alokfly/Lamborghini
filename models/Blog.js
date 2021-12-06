const { model, Schema } = require("mongoose");
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("blog", blogSchema);
