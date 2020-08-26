const express = require("express");
const router = express.Router();

const {
    authJwt
} = require("../middlewares")
const postCtrl = require("../controllers/post");


router.post("/posts", [authJwt.verifyToken], postCtrl.newPost);
router.get("/posts", [authJwt.verifyToken], postCtrl.getAllPosts);
router.get("/posts/admin", [authJwt.verifyToken], postCtrl.getAllAdminPosts);
router.get("/posts/lastposts", [authJwt.verifyToken], postCtrl.getLastPosts);
router.put('/posts/:id', [authJwt.verifyToken], postCtrl.modifyPost);
router.delete("/posts/:id", [authJwt.verifyToken], postCtrl.deletePost);


module.exports = router;