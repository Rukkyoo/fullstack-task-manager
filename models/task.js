const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name can't be more than 20 characters long"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);

/* import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
}) */
