const mongooose = require("mongoose");

const likeSchema = mongoose.Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  commentId: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Like", likeSchema);
