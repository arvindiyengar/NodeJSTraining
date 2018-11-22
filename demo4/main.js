console.log("Flow in Customer.js");

const { customerValidation, customerValidationNew } = require("./customer");

console.log("Invoking customerValidation");

/*

customerValidation takes id and performs a check if user exists. The response is printed
in the customer.js file itself
 

*/
let id = 1;
const customerBodyOld = customerValidation(id);
console.log(customerBodyOld);

/*

In order to perform some more validation , we need to get the data out of the customer validation , thereby making it more re-usable
This can be achieved by sending a callback function to the customerValidation
*/

console.log("Using Callback's");

// Valid ID
id = 2;
const customerBodyNew = customerValidationNew(id, (error, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log("User data received");
    console.log(JSON.stringify(body, undefined, 4));
  }
});
