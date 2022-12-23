const mongooose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    videoId: { type: String, required: true },
    subComment: [
      {
        type: String,
      },
    ],
    userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
