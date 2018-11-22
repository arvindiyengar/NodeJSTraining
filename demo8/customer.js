const request = require("request");

const customerValidation = (id) =>
  new Promise((resolve, reject) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(
      {
        url,
        json: true
      },
      (err, res, body) => {
        if (err) {
          reject("System Error occured while connecting to API");
        } else if (res.statusCode !== 200) {
          reject("Error occured while connecting to API");
        } else {
          //console.log(body);
          // return body; Is this possible ?
          resolve(body);
        }
      }
    );
  });

const postByCustomer = (id) =>
  new Promise((resolve, reject) => {
    console.log("Flow in postByCustomer");
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    request(
      {
        url,
        json: true
      },
      (err, res, body) => {
        if (err) {
          reject("System Error occured while connecting to API");
        } else if (res.statusCode !== 200) {
          reject("Error occured while connecting to Posts API");
        } else {
          console.log("Posts found.");
          resolve(body);
        }
      }
    );
  });

module.exports = { postByCustomer, customerValidation };
