const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  userId: {  type: mongoose.Schema.Types.ObjectId, ref: "User"  },
  commentId: {  type: mongoose.Schema.Types.ObjectId, ref: "Comment"  },
});

module.exports = mongoose.model("Like", likeSchema);
