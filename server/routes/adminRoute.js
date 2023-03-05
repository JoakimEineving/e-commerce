const express = require('express');
const router = express.Router();
const adminProducts = require('../controllers/admin/adminProductController');
const adminOrders = require('../controllers/admin/adminOrderController');
const adminAccounts = require('../controllers/admin/adminAccountController');
const authAdmin = require('../middleware/authAdmin');

//products
router.post('/uploadProduct', authAdmin, adminProducts.uploadProduct);
router.get('/getProducts', adminProducts.getProducts);
router.delete('/deleteProduct/:id', adminProducts.deleteProduct);

//orders
router.get('/getOrders', adminOrders.getOrders);
router.delete('/deleteOrder/:orderNumber', adminOrders.deleteOrder);
router.post('/orderPaid/:orderNumber', adminOrders.orderPaid);
router.post('/orderDelivered/:orderNumber', adminOrders.orderDelivered);

//accounts
router.get('/getAccounts', adminAccounts.getAccounts);
router.delete('/deleteAccount/:id', adminAccounts.deleteAccount);

module.exports = router;