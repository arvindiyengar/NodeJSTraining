console.log("Flow in demo6.js");

const samplePromiseResolved = new Promise((resolve, reject) => {
  resolve("All good. samplePromiseResolved .");
});

samplePromiseResolved.then((message) => {
  console.log("Inside the then function . samplePromiseResolved");
  console.log(message);
});

const samplePromiseReject = new Promise((resolve, reject) => {
  reject("There was an error. samplePromiseReject");
});

samplePromiseReject.catch((err) => {
  console.log("Inside the catch function . samplePromiseReject");
  console.log(err);
});

const samplePromiseBoth = new Promise((resolve, reject) => {
  resolve("All good. samplePromiseBoth.");

  reject("There was an error . samplePromiseBoth"); // What happens here ?
});

samplePromiseBoth
  .then((message) => {
    console.log("Inside the then function . samplePromiseBoth");
    console.log(message);
  })
  .catch((err) => {
    console.log("Inside the catch function . samplePromiseBoth");
    console.log(err);
  });

// Real life
const samplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("All good. samplePromise");
  }, 2500);
});

console.log(
  "We are printing the intermediate output of samplePromise",
  samplePromise
);

samplePromise
  .then((message) => {
    console.log("Inside the then function . samplePromise");
    console.log(message);
  })
  .catch((err) => {
    console.log("Inside the catch function . samplePromise");
    console.log(err);
  });
