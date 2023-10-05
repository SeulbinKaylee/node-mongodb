const mogoose = require("mongoose");
const { Schema } = mogoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: String,
    age: {
      type: Number,
      min: 18,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("User", userSchema);
