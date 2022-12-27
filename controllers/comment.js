const Comment = require("../models/comment");

exports.createComment = (req, res, next) => {
  const comment = new Comment({
    ...req.body,
  });
  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire ajouté" }))
    .catch((error) => res.status(400).json({ error }));
};
