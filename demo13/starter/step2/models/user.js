const mongoose = require("mongoose");
const validator = require("validator");
const _ = require("lodash");
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

userSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
