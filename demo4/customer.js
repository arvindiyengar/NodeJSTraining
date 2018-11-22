const request = require("request");

const customerValidation = (id) => {
  url = `https://jsonplaceholder.typicode.com/users/${id}`;
  request(
    {
      url,
      json: true
    },
    (err, res, body) => {
      if (err) {
        console.log("System Error occured while connecting to API");
      } else if (res.statusCode !== 200) {
        console.log("Error occured while connecting to API");
      } else {
        console.log("No error, customer found");
        //console.log(body);
        // return body; Is this possible ?
      }
    }
  );
};

const customerValidationNew = (id, callback) => {
  url = `https://jsonplaceholder.typicode.com/users/${id}`;
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

module.exports = { customerValidation, customerValidationNew };
