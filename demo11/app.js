const express = require("express");
const app = express();
const uuid = require("uuid");

app.use((req, res, next) => {
  req.id = uuid.v4();
  console.log(req.id);
  next();
});
app.use((req, res, next) => {
  console.log("We are in our 1st Middleware function");
  console.log(req.id, new Date().toString(), req.protocol, req.path);
  next();
});

const middlware2 = (req, res, next) => {
  console.log(req.id + "We are in our 2st Middleware function");
  next();
};
app.use(middlware2);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on 3000 port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
