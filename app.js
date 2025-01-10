const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const { connect } = require("mongoose");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");


app.use(express.static("./public"));

// Parse JSON request bodies
app.use(express.json());

app.use(notFound);
app.use(errorHandlerMiddleware);

// routes
/* app.get("/hello", (req, res) => {
  res.send("welcome to my task manager app");
});
 */


// Using the directory below and placing the task route there
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
    /* res.status(401).send("Server Error"); */

  }
};




start();
