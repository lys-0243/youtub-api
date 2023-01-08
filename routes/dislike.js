const express = require("express");
const router = express.Router();
const dislikeCtrl = require("../controllers/dislike");

router.post("/dislike", dislikeCtrl.disLikeComment);


module.exports = router;