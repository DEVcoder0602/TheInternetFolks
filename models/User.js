const mongoose = require("mongoose");
const snowflake = require("@theinternetfolks/snowflake");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please provide an unique id"],
      unique: true,
    },
    name: {
      type: String,
      default: null,
      minLength: 3,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserData", UserSchema);
