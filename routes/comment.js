const express = require("express");
const router = express.Router();

const {
    authJwt
} = require("../middlewares")
const commentCtrl = require("../controllers/comment");

router.post("/comments", [authJwt.verifyToken], commentCtrl.newComment);

module.exports = router;