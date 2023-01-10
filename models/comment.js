const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    videoId: { type: String, required: true },
    parentId: {type:String, default:null},
    commentText: { type: String, required: true },
    
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
