/*

Bonus : Arrow Functions

*/

var sayHello = function(name) {
  console.log(`Hello ${name}`);
};

const sayHelloNew = (name) => {
  console.log(`Hello ${name} . I am from the new age .`);
};

const sayHelloNew2 = (name1, name2 = "sample") => {
  console.log(`Hello ${name1} . I am from the new age .`);
};

var retName = function(name) {
  return name + "Snowwwww";
};

const retNameNew = (name) => name + "Snow";

var noParam = function() {
  console.log("No Param passed. Normal . ");
};

const noParamNew = () => console.log("No Param passed. Arrow .");

// Invoking all functions

sayHello("John");
sayHelloNew("Joe");
sayHelloNew2("Jane");
console.log(retName("Jade"));
console.log(retNameNew("Jack"));
noParam();
noParamNew();
