/*

Sync Part 

*/

console.log("Starting 1");
console.log("Starting 2");
console.log("Starting 3");

/*

Async Part 

*/

console.log("Starting 1");

setTimeout(() => {
  console.log("Starting 2");
}, 2000);

console.log("Starting 3");
