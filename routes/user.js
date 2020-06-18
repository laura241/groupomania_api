const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const userCtrl = require("../controllers/user");
const { userValidationRules, validate } = require("../middlewares/validation");

router.post("/signup", userValidationRules(), validate, userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/user/:userId", auth, userCtrl.getUserAccount);
router.put("/user/:userId", auth, userCtrl.modifyUserAccount);
router.delete("/user/:userId", auth, userCtrl.deleteUserAccount);

module.exports = router;
