const express = require("express");
const router = express.Router();
const adminProducts = require("../controllers/admin/adminProductController");
const adminOrders = require("../controllers/admin/adminOrderController");
const adminAccounts = require("../controllers/admin/adminAccountController");
const authAdmin = require("../middleware/authAdmin");

//products
router.post("/uploadProduct", authAdmin, adminProducts.uploadProduct);
router.get("/getProducts", authAdmin, adminProducts.getProducts);
router.delete("/deleteProduct/:id", authAdmin, adminProducts.deleteProduct);

//orders
router.get("/getOrders", authAdmin, adminOrders.getOrders);
router.delete("/deleteOrder/:orderNumber", authAdmin, adminOrders.deleteOrder);
router.post("/orderPaid/:orderNumber", authAdmin, adminOrders.orderPaid);
router.post(
  "/orderDelivered/:orderNumber",
  authAdmin,
  adminOrders.orderDelivered
);

//accounts
router.get("/getAccounts", authAdmin, adminAccounts.getAccounts);
router.delete("/deleteAccount/:id", authAdmin, adminAccounts.deleteAccount);

module.exports = router;
