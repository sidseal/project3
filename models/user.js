const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { 
    type: String, 
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
   },
  password: { 
    type: String, 
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."] 
  },
  username: { type: String, required: false },
  contactEmail: { 
    type: String, 
    required: false,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
   },
  age: { type: Number, required: false },
  usersGender: { type: String, required: false},
  usergenderPreference: { type: String, required: false},
  img: { type: String },
  shows: [{type: String}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;