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
              Date
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
      <div className="container mx-auto p-6">
  <h1 className="text-3xl font-bold mb-6 text-center">
    Orders Overview
  </h1>
  {orders.length > 0 ? (
    orders.map((order) => (
      <div
        key={order._id}
        className="border border-gray-300 rounded-lg mb-6"
      >
        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium text-lg">
              {order.shippingAddress.fullName}
            </p>
            <p className="text-gray-500 text-sm">
              Date
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">${order.totalPrice}</p>
            <p className={`text-sm font-medium ${order.isPaid ? 'text-green-500' : 'text-red-500'}`}>
              {order.isPaid ? 'Paid' : 'Not Paid'}
            </p>
          </div>
        </div>
        <div className="px-4 pb-4">
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
    <p className="text-center">No orders found</p>
  )}
</div>
    </div>
    
  );
};

//       <h1 className="text-3xl font-bold flex justify-center">
//         Orders Overview
//       </h1>
//       <div className="flex justify-around flex-row m-3 flex-wrap">
//         {orders.length > 0 ? (
//           orders.map((order) => (
//             <div key={order._id} className="m-2 shadow-xl flex-wrap">
//               <div className="card-body w-96">
//                 <div
//                   className="flex justify-between cursor-pointer"
//                   onClick={() => handleOrderClick(order._id)}
//                 >
//                   <h2 className="card-title">
//                     {order.shippingAddress.fullName}
//                   </h2>
//                   <p>${order.totalPrice}</p>
//                   <p>{order.isPaid ? "Paid" : "Not Paid"}</p>
//                   <p>{order.isDelivered ? "Delivered" : "Not Delivered"}</p>
//                 </div>
//                 {selectedOrderId === order._id && (
//                   <div className="flex flex-col">
//                     <p>Email: {order.shippingAddress.email}</p>
//                     <p>Adress: {order.shippingAddress.address}</p>
//                     <p>City: {order.shippingAddress.city}</p>
//                     <p>Postalcode: {order.shippingAddress.postalCode}</p>
//                     <p >Total: ${order.totalPrice}</p>

//                     <p>
//                       {order.orderItems.map((item) => (
//                         <p key={item._id}>
//                           Items: {item.title} x {item.quantity} = ${item.price * item.quantity}
//                         </p>
//                       ))}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No orders found</p>
//         )}
//       </div>
//     </div>
//   );
// };

export default OrdersOverview;
