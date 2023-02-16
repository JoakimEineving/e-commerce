const express = require('express');
const router = express.Router();
const orders = require('../controllers/orderController');

router.post('/createOrder', orders.createOrder);
router.get('/getOrders', orders.getOrders);

module.exports = router;