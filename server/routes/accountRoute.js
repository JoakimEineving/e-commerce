const express = require("express");
const router = express.Router();
const accounts = require("../controllers/accountController");
const auth = require("../middleware/auth");

router.post("/signUp", accounts.signUp);
router.post("/signIn", accounts.signIn);
// router.get('/getAccounts', auth,accounts.getAccounts);
// router.delete('/deleteAccount/:id', auth, accounts.deleteAccount);

module.exports = router;
