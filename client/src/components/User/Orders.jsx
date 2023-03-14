import React, { useEffect, useState } from "react";
import ordersService from "../../services/ordersService";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await ordersService.getOrdersByUser();
            setOrders(orders);
        };
        fetchOrders();
    }, []);

    return (
        <div className="max-w-[1000px] mx-auto p-2">
      <h1 className="text-3xl font-bold flex justify-center ">
        Your orders
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
                  {order.dateCreated.substring(0, 10) +
                    " " +
                    order.dateCreated.substring(11, 19) +
                    " Order: " +
                    order.orderNumber}
                </p>
                
                
              </div>
              <div className="">
                <p className="text-lg font-medium">${order.totalPrice}</p>
                <p
                  className={`text-sm font-medium ${
                    order.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Not Paid"}
                </p>
                <p
                  className={`text-sm font-medium ${
                    order.isDelivered ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {order.isDelivered ? "Delivered" : "Not Delivered"}
                </p>
              </div>
            </div>
            <div className="collapse-content">
              <p className="text-gray-500 text-sm mb-1">
                Shipping Status:{" "}
                {order.isDelivered ? "Delivered" : "Not Delivered"}
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
                    {item.title} x {item.quantity} = $
                    {item.price * item.quantity}
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

    )}


export default Orders
