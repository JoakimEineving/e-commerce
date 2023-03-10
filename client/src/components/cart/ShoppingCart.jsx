import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProgressBar, CartModal } from "../index";
import {
  removeItem,
  subtractQuantity,
  addQuantity,
} from "../../redux/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSubtractQuantity = (product) => {
    dispatch(subtractQuantity(product));
  };

  const handleAddQuantity = (product) => {
    dispatch(addQuantity(product));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <div className="container p-1 mx-auto ">
      <div className="w-full overflow-x-auto">
        <div className="my-2">
          <h3 className="text-xl font-bold tracking-wider text-center">
            Shopping Cart {cartItems.length}{" "}
            {cartItems.length === 1 ? "item" : "items"}
          </h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="px-6 py-3 font-bold whitespace-nowrap">Product</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              {/* <th className="px-6 py-3 font-bold whitespace-nowrap">Remove</th> */}
            </tr>
          </thead>

          <tbody>
            {cartItems.map((product) => (
              <tr key={product._id}>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div className="flex justify-center">
                    <img
                      className="object-contain h-28 w-50"
                      src={product.thumbnail}
                    />
                  </div>
                  <div>{product.title}</div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div>
                    <button
                      className="px-2 py-0 shadow"
                      onClick={() => handleSubtractQuantity(product)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="qty"
                      readOnly={true}
                      value={product.quantity}
                      className="w-12 text-center outline-none"
                    />
                    <button
                      className="px-2 py-0 shadow"
                      onClick={() => handleAddQuantity(product)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="p-4 px-6 text-center whitespace-nowrap">
                  ${product.price}
                </td>

                {/* <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button
                    className="px-2 py-0 text-red-100 bg-red-600 rounded"
                    onClick={() => handleRemoveItem(product)}
                  >
                    x
                  </button>
                </td> */}
              </tr>
            ))}
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
              Cancel
            </button>
          </Link>
          <Link to="/checkout/shipping">
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
          </Link>
        </div>
        <ProgressBar step={2} />
      </div>
    </div>
  );
};
export default ShoppingCart;
