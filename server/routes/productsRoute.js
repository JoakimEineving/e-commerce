const express = require('express');
const router = express.Router();
const products = require('../controllers/productsController');

router.post('/upload', products.uploadProduct);
router.get('/getProducts', products.getProducts);
router.delete('/delete/:id', products.deleteProduct);

module.exports = router;