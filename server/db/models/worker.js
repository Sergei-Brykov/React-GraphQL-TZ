const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const workerSchema = new Schema({
  fullName: {
    type: String,
  },
  payment: {
    type: Number,
  },
  birthday: {
    type: String,
  },
  position: {
    type: String,
  },
});

module.exports = model("Worker", workerSchema);
