import mongoose from "mongoose";
import express from "express"
import { Todo } from "./modules/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Moiz khan", decs: "this is dec", isDone: false })
    todo.save()
  res.send('Hello World!');
});


app.get('/a', async(req, res) => {
    const todo = await Todo.findOne({})
  res.json({title: todo.title,descripition: todo.decs});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});