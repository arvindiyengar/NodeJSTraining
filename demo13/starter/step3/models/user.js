const mongoose = require("mongoose");
const validator = require("validator");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    validate: [
      {
        validator: function(value) {
          return validator.isEmail(value);
        },
        message: (props) => {
          return `${props}`;
        }
      }
    ]
  },
  password: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
});

userSchema.pre("validate", (next) => {
  console.log("We are in pre validate");
  next();
});

userSchema.post("validate", (val) => {
  console.log("We are in post validate");
  //next();
  console.log(val);
});

userSchema.pre("save", function(next) {
  console.log("We are in pre save");
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      // Store hash in your password DB.

      user.password = hash;
      console.log(`Salt : ${salt} . Hash : ${hash}`);
      next();
    });
  });
});

userSchema.post("save", (val) => {
  console.log("We are in post save-------");
  console.log(val);
});

userSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
