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

exports.getComments = (req, res, next) => {
  Comment.find()
    .populate("userId")
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(401).json({ error }));
};

exports.lookComments = (req, res, next) => {
  Comment.findOne({ _id: comment._id })
    .populate("userId")
    .then((comment) => {
      console.log("ici:", comment);
      /*  funReussi(comment); */
    });
};
