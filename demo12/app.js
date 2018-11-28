const express = require("express");
const app = express();
const hbs = require("hbs");
// To use hbs , use the below line
app.set("view engine", "hbs");

// To use partials use the below line
hbs.registerPartials(__dirname + "/views/partials");

//To register Helpers use below
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/about", (req, res) => {
  res.render("single.hbs", {
    pageHeader: "About",
    paraContent: "This is the About Page "
  });
});

app.get("/contact", (req, res) => {
  res.render("actual.hbs", {
    pageHeader: "Contact Us",
    paraContent: "Contact Us @ 123-456-898 "
  });
});

app.use("/hello", (req, res) => {
  res.render("hello.hbs", {
    pageHeader: "Hello World"
  });
});

app.listen(3000, () => {
  console.log("Example app listening on 3000 port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
