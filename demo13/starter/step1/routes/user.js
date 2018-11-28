const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("In User Middleware");
  next();
});

router.get("/", (req, res) => {
  res.send({});
});

router.post("/", (req, res) => {
  res.send({});
});

module.exports = router;
