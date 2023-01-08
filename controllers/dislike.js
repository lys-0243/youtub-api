const Like = require("../models/like");
const Dislike = require("../models/dislike");

exports.disLikeComment = (req, res, next) => {
  Dislike.findOne({ userId: req.body.userId })
    .then((disLikeComment) => {
      if (disLikeComment === null) {
        const disLike = new Dislike({
          ...req.body,
        });
        disLike
          .save()
          .then(() => {
            Like.deleteOne({ userId: req.body.userId })
              .then(() => res.status(200).json({ message: "Disliké !" }))
              .catch((error) => res.status(400).json({ error }));
          })
          .catch((error) => res.status(400).json({ error }));
      } else {
        Dislike.deleteOne({ userId: req.body.userId })
          .then(() => res.status(200).json({ message: "Dislike supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
