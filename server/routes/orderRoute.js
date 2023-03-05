const express = require('express');
const router = express.Router();
const orders = require('../controllers/orderController');

router.post('/createOrder', orders.createOrder);
// router.get('/getOrders', orders.getOrders);
// router.delete('/deleteOrder/:orderNumber', orders.deleteOrder);
// router.post('/orderPaid/:orderNumber', orders.orderPaid);
// router.post('/orderDelivered/:orderNumber', orders.orderDelivered);

module.exports = router;