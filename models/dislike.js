const mongoose = require("mongoose");

const dislikeSchema = mongoose.Schema({
  commentId: {  type: mongoose.Schema.Types.ObjectId, ref: "Comment"  },
  userId: {  type: mongoose.Schema.Types.ObjectId, ref: "User"  },
});

module.exports = mongoose.model("Dislike", dislikeSchema);
