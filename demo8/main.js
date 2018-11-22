const { customerValidation, postByCustomer } = require("./customer");

let id = 1;

customerValidation(id)
  .then((message) => {
    console.log("User Validated", message);
    return postByCustomer(id);
  })
  .then((message) => {
    console.log("Posts by User found");
    console.log(message);
  })
  .catch((err) => {
    console.log("Error occured in main.js");
    console.log(err);
  });
