console.log("Flow in sample.js");

// To import use require()

const { add, multiply, subtract } = require("./test");

console.log(add(10, 3));
console.log(multiply(30, 3));
console.log(subtract(20, 5));

console.log(module);
