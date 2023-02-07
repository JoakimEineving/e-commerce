import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    setCartTotal(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, []);

  const clearCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter((item) => item._id !== product._id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="container p-8 mx-auto mt-12 bg-white">
      <div className="w-full overflow-x-auto">
        <div className="my-2">
          <h3 className="text-xl font-bold tracking-wider">
            Shopping Cart {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 font-bold whitespace-nowrap">Product</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <tr>
                <td
                  className="p-4 px-6 text-center whitespace-nowrap object-contain h-28 w-56"
                  key={product._id}
                >
                  <img classname=" " src={product.thumbnail} />
                  {product.title}
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div>
                    <button className="px-2 py-0 shadow">-</button>
                    <input
                      type="text"
                      name="qty"
                      value={product.quantity}
                      className="w-12 text-center bg-gray-100 outline-none"
                    />
                    <button className="px-2 py-0 shadow">+</button>
                  </div>
                </td>

                <td className="p-4 px-6 text-center whitespace-nowrap">
                  ${product.price}
                </td>

                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button
                    className="px-2 py-0 text-red-100 bg-red-600 rounded"
                    onClick={() => clearCart(product)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}

            <td className="p-4 px-6 text-center whitespace-nowrap"></td>
          </tbody>
        </table>

        <div className="flex justify-center mt-4 space-x-2">
            <Link to="/">
          <button
            className="
                px-6
                py-3
                text-sm text-gray-800
                bg-gray-200
                hover:bg-gray-400
              "
          >
            Cannel
          </button>
            </Link>
          <button
            className="
                px-6
                py-3
                text-sm text-white
                bg-indigo-500
                hover:bg-indigo-600
              "
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Add Product</li>
            <li className="step step-primary">Shopping Cart</li>
            <li className="step">Checkout</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cart;
