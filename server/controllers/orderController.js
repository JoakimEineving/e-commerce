const Order = require("../models/orderModel");

//create new order
const createOrder = async (req, res) => {
  try {
    const {
      orderNumber,
      orderItems,
      shippingAddress,
      paymentMethod,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
    } else {
      const order = new Order({
        orderNumber,
        orderItems,
        shippingAddress,
        paymentMethod,
        shippingPrice,
        totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const orderPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderNumber);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
    }
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

    


const orders = { createOrder, getOrders, orderPaid };

module.exports = orders;
