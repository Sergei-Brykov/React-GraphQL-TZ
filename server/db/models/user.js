const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  password: {
    type: String,
    default: "",
    select: false,
  },
  name: {
    type: String,
  },
});

module.exports = model("User", userSchema);
