const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.use((req, res, next) => {
  console.log("In User Middleware");
  next();
});

router.get("/", (req, res) => {
  User.find({})
    .then((users) => {
      console.log("Inside loop of users");
      res.send({
        users,
        count: users.length
      });
    })
    .catch((e) => {
      console.log("Err", e);
      res.status(500).send(e);
    });
});

router.post("/", (req, res) => {
  console.log("In User register");
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then((doc) => {
      console.log("Inserted a new user");
      res.send(doc);
    })
    .catch((e) => {
      console.log("eee", e);
      res.status(500).send(e);
    });
});

module.exports = router;
