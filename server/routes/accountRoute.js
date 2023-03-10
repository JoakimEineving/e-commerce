const express = require("express");
const router = express.Router();
const accounts = require("../controllers/accountController");

router.post("/signUp", accounts.signUp);
router.post("/signIn", accounts.signIn);

module.exports = router;
