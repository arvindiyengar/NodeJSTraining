const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => {
  console.log("Example app listening on 3000 port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
