const Like = require("../models/like");
const Dislike=require("../models/dislike");

exports.likeComment = (req, res, next) => {
  Like.findOne({ userId: req.body.userId })
    .then((likeComment) => {
      if (likeComment === null) {
        const like = new Like({
          ...req.body,
        });
        like
          .save()
          .then(() => {
            Dislike.deleteOne({ userId: req.body.userId })
              .then(() =>
                res.status(200).json({ message: "Commentaire liké !" })
              )
              .catch((error) => res.status(400).json({ error }));
          })
          .catch((error) => res.status(400).json({ error }));
      } else {
        Like.deleteOne({ userId: req.body.userId })
          .then(() => res.status(200).json({ message: "Like supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
