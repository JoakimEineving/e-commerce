const Order = require("../../models/orderModel");

const getOrders = async (req, res) => {
    try {
      const orders = await Order.find({});
      res.json(orders.reverse());
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const orderPaid = async (req, res) => {
    try {
      const order = await Order.findOne({ orderNumber: req.params.orderNumber });
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        const updatedOrder = await order.save();
        res.json(updatedOrder);
        console.log(`Order with id ${req.params.orderNumber} marked as paid`);
      } else {
        res.status(404);
        throw new Error("Order not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const orderDelivered = async (req, res) => {
    try {
      const order = await Order.findOne({ orderNumber: req.params.orderNumber });
      if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        const updatedOrder = await order.save();
        res.json(updatedOrder);
        console.log(`Order with id ${req.params.orderNumber} marked as delivered`);
        
      } else {
        res.status(404);
        throw new Error("Order not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteOrder = async (req, res) => {
    try {
      const order = await Order.findOne({ orderNumber: req.params.orderNumber });
      if (order) {
        await order.remove();
        res.json({ message: "Order removed" });
        console.log(`Order with id ${req.params.orderNumber} deleted`);
      } else {
        res.status(404);
        throw new Error("Order not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const adminOrder = { getOrders, orderPaid, orderDelivered, deleteOrder };

module.exports = adminOrder;