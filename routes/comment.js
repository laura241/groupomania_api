const express = require("express");
const router = express.Router();

const {
    authJwt
} = require("../middlewares")
const commentCtrl = require("../controllers/comment");

router.post("/comments", [authJwt.verifyToken], commentCtrl.newComment);
router.get('/comments/users/:id', [authJwt.verifyToken], commentCtrl.getCommentsByUser);
router.put('/comments/:id', [authJwt.verifyToken], commentCtrl.modifyComment);
router.delete("/comments/:id", [authJwt.verifyToken], commentCtrl.deleteComment);
router.get("/comments/admin", [authJwt.verifyToken], commentCtrl.getAllAdminComments);



module.exports = router;