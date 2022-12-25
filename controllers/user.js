const User = require("../models/user");

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        delete req.body._id;
        const user = new User({
          ...req.body,
        });
        user
          .save()
          .then(() => res.status(201).json(user))
          .catch((error) => res.status(400).json({ error }));
      } else {
        res.status(200).json(user);
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
exports.findOneUser = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

exports.modifyUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
