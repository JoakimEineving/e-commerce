import React, { useState, useEffect } from "react";
import ordersService from "../../services/ordersService";

const OrdersOverview = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const ordersData = await ordersService.getOrders();
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  const handleOrderPaid = async (orderNumber) => {
    const updatedOrder = await ordersService.orderPaid(orderNumber);
    if (updatedOrder) {
      setOrders(
        orders.map((order) =>
          order.orderNumber === orderNumber ? updatedOrder : order
        )
      );
    }
  };

  const handleOrderDelivered = async (orderNumber) => {
    const updatedOrder = await ordersService.orderDelivered(orderNumber);
    if (updatedOrder) {
      setOrders(
        orders.map((order) =>
          order.orderNumber === orderNumber ? updatedOrder : order
        )
      );
    }
  };

  return (
    <div className="">
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
                  {order.dateCreated.substring(0, 10) +
                    " " +
                    order.dateCreated.substring(11, 19) +
                    " Order: " +
                    order.orderNumber}
                </p>
                <div className="mt-2">
                  <button
                    className="btn btn-sm mr-1"
                    onClick={() => handleOrderPaid(order.orderNumber)}
                  >
                    Mark as Paid
                  </button>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleOrderDelivered(order.orderNumber)}
                  >
                    Mark as Delivered
                  </button>
                </div>
              </div>
              <div>
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
      <div class="w-full overflow-hidden rounded-lg shadow-xs ">
        <div class="w-full overflow-x-auto">
          <thead>
            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold">Hans Burger</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      10x Developer
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm">$ 863.45</td>
              <td class="px-4 py-3 text-xs">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm">6/10/2020</td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default OrdersOverview;
