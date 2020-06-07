const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/user/:userId", userCtrl.getUserAccount);
router.put("/user/:userId", userCtrl.modifyUserAccount);
router.delete("/user/:userId", userCtrl.deleteUserAccount);

module.exports = router;