const express = require("express");
const app = express();
const { Todo } = require("./todo");
const bodyParser = require("body-parser");
/*

Each todo

    title
    description
    completed: 

    {
        id : 1
        title: "Sample"
        description: "This is a sample description"

    }

    Handled in class ./todo.js

*/

app.use(bodyParser.json());
let todos = [];

app.get("/todo", (req, res) => {
  res.send({
    todos,
    count: todos.length
  });
});

app.get("/todo/:id", (req, res) => {
  let output;
  if (req.params.id) {
    output = todos.filter((todo) => {
      return todo.id === req.params.id;
    });
    res.send({
      todos: output,
      count: output.length
    });
  } else {
    res.status(500).send({
      error: "ID not passed exist",
      errorMessage: "ID not passed exist"
    });
  }
});
app.post("/todo", (req, res) => {
  console.log("New record", req.body);
  let output = todos.filter((todo) => todo.id === req.body.id);
  if (output.length > 0) {
    res.status(500).send({
      error: "ID exist",
      errorMessage: "ID exists already , please try with a new id"
    });
  } else {
    console.log(req.body.id, req.body.title, req.body.description);
    todos.push(new Todo(req.body.id, req.body.title, req.body.description));
    res.status(201).send({
      status: "Added"
    });
  }
});
app.put("/todo", (req, res) => {
  res.send({
    status: "ok"
  });
});
app.delete("/todo", (req, res) => {
  res.send({
    status: "ok"
  });
});

app.listen(3000, () => {
  console.log("Todo app listening on 3000 port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
