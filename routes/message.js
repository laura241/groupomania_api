const express = require("express");
const router = express.Router();

const {
    authJwt
} = require("../middlewares")
const messageCtrl = require("../controllers/message");


router.post("/messages", [authJwt.verifyToken], messageCtrl.newPost);
router.get("/messages", [authJwt.verifyToken], messageCtrl.getAllMessages);


module.exports = router;