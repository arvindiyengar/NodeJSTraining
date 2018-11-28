const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
router.use((req, res, next) => {
  console.log("In Todo Middleware");
  next();
});

router.get("/", (req, res) => {
  Todo.find({})
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

router.post("/", (req, res) => {
  console.log("inside");
  console.log(req.body);
  const todo = new Todo({
    title: req.body.title
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
