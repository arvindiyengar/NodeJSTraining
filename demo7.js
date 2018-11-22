console.log("Flow in demo7.js");

const asyncAdd = (num1, num2) => {
  console.log(`We are in the asyncAdd function with ${num1} and ${num2}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 === "number" && typeof num2 == "number") {
        resolve(num1 + num2);
      } else {
        reject("asyncSubtract .Params passed are invalid. Please check again");
      }
    }, 3500);
  });
};

// This would be resolved
asyncAdd(3, 5)
  .then((message) => {
    console.log("We are in the then function of asyncAdd promise");
    console.log(message);
  })
  .catch((err) => {
    console.log("We are in the catch function of asynAdd promise");
    console.log(err);
  });

// This would get rejected
asyncAdd("8", 5)
  .then((message) => {
    console.log("We are in the then function of asyncAdd promise");
    console.log(message);
  })
  .catch((err) => {
    console.log("We are in the catch function of asynAdd promise");
    console.log(err);
  });

/*

Promise chaining

Suppose 2 functions , If we want to use the output of the last call for another one. Similar to CustomerValidation and PostsByUser

*/

const asyncSubtract = (num1, num2) => {
  console.log(`We are in the asyncSubtract function with ${num1} and ${num2}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 === "number" && typeof num2 == "number") {
        resolve(num1 - num2);
      } else {
        reject("asyncSubtract.Params passed are invalid. Please check again");
      }
    }, 5000);
  });
};

asyncAdd(8, 5)
  .then((message) => {
    console.log("We are in the then function of asyncAdd promise");
    console.log(message);
    console.log("Calling asyncSubtract function");
    return asyncSubtract(message, 2); // We need to return a new Promise for us to chain
  })
  .then((message) => {
    console.log(
      "We are in the then function of asyncAdd promise with asyncSubtract"
    );
    console.log(message);
  })
  .catch((err) => {
    console.log(
      "We are in the catch function of asynAdd / asyncSubtract promise"
    );
    console.log(err);
  });
