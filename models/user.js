
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: false },
  age: { type: Number, required: false },
  usersGender: { type: String, required: false},
  usergenderPreference: { type: String, required: false},
  img: { type: String },
  shows: [{type: String}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;