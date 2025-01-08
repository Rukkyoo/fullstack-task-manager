const Task = require("../models/task");
const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};
const createTask = async (req, res) => {
  /* console.log('Request body:', req.body); */
  const task = await Task.create(req.body);
  res
    .status(201)
    .json({ id: task.id, name: task.name, completed: task.completed });
};
/* const createTask = (req, res) => {
  const { name, completed } = req.body;
  const task = Task.create(req.body);
  console.log("Task created:", task);
  if (task) {
    res.status(200).json({ id: task.id, name, completed });
  }
}; */

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("Update task");
};
const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
