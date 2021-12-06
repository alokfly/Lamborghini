const { model, Schema } = require("mongoose");
const seriesSchema = new Schema(
  {
    seriesName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("series", seriesSchema);
