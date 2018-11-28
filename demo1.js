/*

Sync Part 

*/

// console.log("Starting 1");
// console.log("Starting 2");
// console.log("Starting 3");

/*

Async Part 

*/

console.log("Starting 1");

setTimeout(() => {
  console.log("Starting 2");
}, 2000);

// setTimeout (  function1 -- callback  ,  timervalue   )
// Event Loop - box know what to execute
console.log("Starting 3");

// Do I have anything ? No . Execution .
// Event Loop - Do you want me to process ? Node yes .
