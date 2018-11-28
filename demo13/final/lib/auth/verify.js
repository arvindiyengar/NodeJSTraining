const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  jwt.verify(req.headers.token, "secretkey123", (err, decoded) => {
    if (err) {
      res.status(401).send();
    }
    req.user = decoded;
    next();
  });
};

module.exports = authToken;
