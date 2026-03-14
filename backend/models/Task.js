const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  status: {
    type: String,
    default: "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", TaskSchema);