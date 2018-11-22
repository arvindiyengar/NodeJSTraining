const request = require("request");

const customerValidation = (id, callback) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  request(
    {
      url,
      json: true
    },
    (err, res, body) => {
      if (err) {
        callback("System Error occured while connecting to API");
      } else if (res.statusCode !== 200) {
        callback("Error occured while connecting to API");
      } else {
        //console.log(body);
        // return body; Is this possible ?
        callback(undefined, body);
      }
    }
  );
};

const postByCustomer = (id, callback) => {
  console.log("Flow in postByCustomer");
  let url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  request(
    {
      url,
      json: true
    },
    (err, res, body) => {
      if (err) {
        callback("System Error occured while connecting to API");
      } else if (res.statusCode !== 200) {
        callback("Error occured while connecting to Posts API");
      } else {
        console.log("Posts found.");
        callback(undefined, body);
      }
    }
  );
};

module.exports = { postByCustomer, customerValidation };
