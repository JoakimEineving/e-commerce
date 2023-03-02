const express = require('express');
const router = express.Router();
const accounts = require('../controllers/accountController');

router.post('/signUp', accounts.signUp);
router.post('/signIn', accounts.signIn);
router.get('/getAccounts', accounts.getAccounts);
router.delete('/deleteAccount/:id', accounts.deleteAccount);

module.exports = router;