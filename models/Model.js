const { model, Schema } = require("mongoose");
const modelSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("model", modelSchema);
