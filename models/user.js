const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  age: { type: Number, required: true },
  genderpreference: { type: String, required: true},
  img: { type: String },
  shows: [{type: String}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;