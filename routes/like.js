const express = require("express");
const router = express.Router();
const likeCtrl = require("../controllers/like");

router.post("/like", likeCtrl.likeComment);


module.exports = router;