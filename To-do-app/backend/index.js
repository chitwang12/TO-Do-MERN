const express = require('express');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://CG_Personal:Chitwan0211@cluster0.1mg6bhi.mongodb.net/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Todo = mongoose.model('todos', todoSchema);

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    // Put it in MongoDB
    await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: "Todo Created",
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await Todo.find({});
    res.json({
      todos
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    // Use updateOne or updateMany instead of update
    await Todo.updateOne(
      { _id: req.body.id },
      { $set: { completed: true } }
    );
    res.json({
      message: "Todo marked as completed"
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
