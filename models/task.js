const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,   
  },
  completed: {
    type: Boolean,   
  },
});

module.exports = mongoose.model("Task", taskSchema);


/* import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
}) */