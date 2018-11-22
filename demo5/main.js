console.log("Flow in Main.js");

let id = 1;

const { customerValidation, postByCustomer } = require("./customer");

customerValidation(id, (err, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Customer Validated");
    console.log(JSON.stringify(body, undefined, 4));
    console.log("Checking posts by user" + id);

    postByCustomer(id, (error, postBody) => {
      if (error) {
        console.log("Error");
      } else {
        console.log(JSON.stringify(postBody, undefined, 4));
      }
    });
  }
});
