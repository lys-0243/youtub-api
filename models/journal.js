const mongoose = require("mongoose");

const journalSchema = mongoose.Schema(
  {
    extraMessage: { type: String, required: false },
    actorID: [{ type: Schema.Types.ObjectId, ref: "User" }],
    notifierId: [{ type: Schema.Types.ObjectId, ref: "User" }],
    commentId: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Journal", journalSchema);
