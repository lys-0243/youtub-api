const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    videoId: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    parentCommentId: {type:String, default:null},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
