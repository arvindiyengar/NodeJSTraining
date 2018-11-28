const mongoose = require("mongoose");
const validator = require("validator");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    validate: [
      {
        validator: function(value) {
          console.log(JSON.stringify(value, undefined, 4));
          if (value.length <= 2) {
            return false;
          }
          return true;
        },
        message: (props) => {
          console.log("Inside the validate");
          console.log(JSON.stringify(props, undefined, 4));
          return `${props} there is an error`;
        }
      }
    ]
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
