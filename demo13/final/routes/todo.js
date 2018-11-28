const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const _ = require("lodash");

const authToken = require("../lib/auth/verify");

router.use((req, res, next) => {
  console.log("In Todo Middleware");
  next();
});

router.get("/", authToken, (req, res) => {
  console.log(req.user);
  Todo.find({ creator: req.user.id })
    .then((todos) => {
      console.log("Inside loop of todos");
      res.send({
        todos,
        count: todos.length
      });
    })
    .catch((e) => {
      console.log("Err", e);
      res.status(500).send(e);
    });
});

router.get("/:id", authToken, (req, res) => {
  console.log(req.user);
  Todo.findOne({ creator: req.user.id, _id: req.params.id })
    .then((todo) => {
      res.send({
        todo
      });
    })
    .catch((e) => {
      console.log("Err", e);
      res.status(500).send(e);
    });
});
router.put("/:id", authToken, (req, res, next) => {
  const id = req.params.id;
  const updatedTodo = _.pick(req.body, ["title", "completed"]);

  if (_.isBoolean(updatedTodo.completed) && updatedTodo.completed == true) {
    updatedTodo.completedAt = new Date().getTime();
  } else {
    updatedTodo.completed = false;
    updatedTodo.completedAt = null;
  }
  console.log(updatedTodo);
  Todo.findOneAndUpdate(
    {
      _id: id,
      creator: req.user.id
    },
    { $set: updatedTodo },
    { new: true }
  )
    .then((todo) => {
      console.log("Found");
      res.send(todo);
    })
    .catch((e) => {
      console.log("Err", e);
      res.status(500).send(e);
    });
});
router.post("/", authToken, (req, res) => {
  console.log("inside");
  console.log(req.body);
  const todo = new Todo({
    title: req.body.title,
    creator: req.user.id
  });
  todo
    .save()
    .then((doc) => {
      console.log("Done");
      res.send(doc);
    })
    .catch((e) => {
      console.log("Err", e);
      res.send(e);
    });
});

module.exports = router;
