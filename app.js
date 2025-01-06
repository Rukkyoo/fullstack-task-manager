const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const { connect } = require("mongoose");
require("dotenv").config();

// routes
app.get("/hello", (req, res) => {
  res.send("welcome to my task manager app");
});

// Using the directory below and placing the task route there
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
