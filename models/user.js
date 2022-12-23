const mongooose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  photo: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  twitter: { type: String, required: false },
  linkedIn: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
