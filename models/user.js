const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  twitter: { type: String, required: false },
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
