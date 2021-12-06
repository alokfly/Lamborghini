const { model, Schema } = require("mongoose");
const chassisNumberSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("chassisNumber", chassisNumberSchema);
