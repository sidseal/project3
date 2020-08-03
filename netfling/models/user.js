const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  genderpreference: { type: String, required: true},
  pic: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;