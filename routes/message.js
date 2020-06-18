const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth')

const messageCtrl = require("../controllers/message");

router.post("/messages", auth, messageCtrl.newPost);


module.exports = router;