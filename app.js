const express = require("express")
const app = express()
const tasks = require("./routes/tasks")

// routes
app.get("/hello", (req, res) =>{
    res.send("welcome to my task manager app")
})


// Using the directory below and placing the task route there
app.use("/api/v1/tasks", tasks)

const port = 3000

app.listen (port, () => {
    console.log(`server is listening on port ${port}`)
})