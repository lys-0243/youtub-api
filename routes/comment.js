const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");

router.post("/comment", commentCtrl.createComment);
router.get("/comment", commentCtrl.getComments);



module.exports = router;
