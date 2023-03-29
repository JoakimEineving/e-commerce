const express = require("express");
const router = express.Router();
const payment = require("../controllers/paymentController");

router.post("/createPaymentIntent", payment.createPaymentIntent);

module.exports = router;