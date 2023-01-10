const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  commentId: {  type: mongoose.Schema.Types.ObjectId, ref: "Comment"  },
  userId: {  type: mongoose.Schema.Types.ObjectId, ref: "User"  },
});

module.exports = mongoose.model("Like", likeSchema);
