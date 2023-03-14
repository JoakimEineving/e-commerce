const express = require("express");
const router = express.Router();
const orders = require("../controllers/orderController");
const auth = require("../middleware/auth");

router.post("/createOrder", orders.createOrder);
router.get("/getOrdersByUser", auth, orders.getOrdersByUser);

module.exports = router;
