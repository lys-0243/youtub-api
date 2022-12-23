const mongooose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    message: { type: String, required: true },
    senderId: [{ type: Schema.Types.ObjectId, ref: "User" }],
    receiverId: [{ type: Schema.Types.ObjectId, ref: "User" }],
    commentId: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
