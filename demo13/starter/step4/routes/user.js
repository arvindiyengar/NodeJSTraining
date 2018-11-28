const express = require("express");
const router = express.Router();
const User = require("../models/user");
const _ = require("lodash");
const authToken = require("../lib/auth/verify");
router.use((req, res, next) => {
  console.log("In User Middleware");
  next();
});

router.get("/", authToken, (req, res) => {
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

router.post("/login", (req, res) => {
  const { email, password } = _.pick(req.body, ["email", "password"]);
  console.log(email, password);
  User.findOne({ email })
    .then((user) => {
      console.log("User Found");
      console.log("Checking user Authentication ");
      return user.comparePassword(password);
    })
    .then((user) => {
      console.log("User Authenticated.");
      return user.generateToken();
    })
    .then((token) => {
      console.log("In token place");
      console.log("T", token);
      res.header("x-auth", token).send({});
    })
    .catch((e) => {
      console.log("UnAuthorized", e);
      res.status(401).send();
    });
});
router.post("/register", (req, res) => {
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
