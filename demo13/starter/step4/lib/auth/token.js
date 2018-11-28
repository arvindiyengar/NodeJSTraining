const jwt = require("jsonwebtoken");

const tokenGen = (body) => {
  return new Promise((resolve, reject) => {
    jwt.sign(body, "secretkey123", (err, token) => {
      if (err) {
        reject(false);
      }
      console.log("generated", token);
      resolve(token);
    });
  });
};

module.exports = tokenGen;
