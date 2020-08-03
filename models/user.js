const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  genderpreference: { type: String, required: true},
  img: { data: Buffer, contentType: String },
  shows: [{type: String}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;