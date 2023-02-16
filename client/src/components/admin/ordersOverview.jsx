import React, { useState, useEffect } from "react";
import axios from "axios";

const OrdersOverview = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState("");

  const handleOrderClick = (orderId) => {
    if (selectedOrderId === orderId) {
      setSelectedOrderId("");
    } else {
      setSelectedOrderId(orderId);
    }
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/orders/getOrders");
        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);

  return (
    <div>
        <h1 className="text-3xl font-bold flex justify-center">
         Orders Overview
       </h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            tabIndex={0}
            className="collapse border border-base-300 bg-base-100 rounded-box  m-2"
          >
            <div className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium text-lg">
              {order.shippingAddress.fullName}
            </p>
            <p className="text-gray-500 text-sm">
              {order.dateCreated.substring(0, 10) + " " + order.dateCreated.substring(11, 19)}
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">${order.totalPrice}</p>
            <p className={`text-sm font-medium ${order.isPaid ? 'text-green-500' : 'text-red-500'}`}>
              {order.isPaid ? 'Paid' : 'Not Paid'}
            </p>
          </div>
        </div>
            <div className="collapse-content">
            <p className="text-gray-500 text-sm mb-1">
            Shipping Status: {order.isDelivered ? 'Delivered' : 'Not Delivered'}
          </p>
          <p className="text-gray-500 text-sm mb-1">
            Email: {order.shippingAddress.email}
          </p>
          <p className="text-gray-500 text-sm mb-1">
            Address: {order.shippingAddress.address}
          </p>
          <p className="text-gray-500 text-sm mb-1">
            City: {order.shippingAddress.city}
          </p>
          <p className="text-gray-500 text-sm mb-1">
            Postal Code: {order.shippingAddress.postalCode}
          </p>
              <p className="text-gray-500 text-sm mb-1">Items ordered:</p>
          <ul className="list-disc list-inside mb-4">
            {order.orderItems.map((item) => (
              <li key={item._id} className="text-gray-500 text-sm">
                {item.title} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};



export default OrdersOverview;
