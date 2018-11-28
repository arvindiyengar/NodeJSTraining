const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/sampleDB",
  (err) => {
    if (err) {
      console.log("err", err);
      return undefined;
    }
    console.log("connection to MongoDB sucessful");
  }
);

const app = express();
app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/todo", todoRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("*", (req, res, next) => {
  throw new Error("Not Found");
});
app.use((err, req, res, next) => {
  console.log("Not found");
  console.log(err);
  res.status(404).send();
});

app.listen(3000, () => {
  console.log("Example app listening on 3000 port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
