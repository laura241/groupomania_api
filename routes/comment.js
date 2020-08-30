const express = require("express");
const router = express.Router();

const {
    authJwt
} = require("../middlewares")
const commentCtrl = require("../controllers/comment");

router.post("/comments", [authJwt.verifyToken], commentCtrl.newComment);
router.put('/comments/:id', [authJwt.verifyToken], commentCtrl.modifyComment);
router.delete("/comments/:id", [authJwt.verifyToken], commentCtrl.deleteComment);

module.exports = router;