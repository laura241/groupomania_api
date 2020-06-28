const express = require("express");
const router = express.Router();
const {
    verifySignUp
} = require('../middlewares')

const userCtrl = require("../controllers/user");
const {
    userValidationRules,
    validate
} = require("../middlewares/validation");


router.post("/signup", [verifySignUp.checkDuplicateEmail], userValidationRules(), validate, userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/:userId", userCtrl.getUserAccount);
router.put("/user/:userId", userCtrl.modifyUserAccount);
router.delete("/user/:userId", userCtrl.deleteUserAccount);

module.exports = router;