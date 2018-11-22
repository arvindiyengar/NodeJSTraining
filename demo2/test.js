console.log("Flow in test.js");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// To make the above available , you need to export it using the below

module.exports = {
  add,
  subtract,
  multiply,
  divide
};

console.log(module);
