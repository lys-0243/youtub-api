const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");

router.post("/comment", commentCtrl.createComment);

module.exports = router;
