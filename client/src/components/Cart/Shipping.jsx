import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { subtractQuantity } from "../../redux/cartSlice";
import ordersService from "../../services/ordersService";

const Shipping = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  
  const cartItems = useSelector(state => state.cart);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubtractQuantity = (product) => {
    dispatch(subtractQuantity(product));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const orderData = {
      orderNumber: Math.floor(Date.now() + Math.random()),
      orderItems: cartItems.map((item) => ({
        id: item._id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      shippingAddress: {
        fullName: firstName + ' ' + lastName,
        email,
        address,
        city,
        postalCode,
      },
      paymentMethod: 'paypal',
      shippingPrice: 10,
      totalPrice: cartTotal + 10,
    };

    const createdOrder = await ordersService.createOrder(orderData);

    if (createdOrder) {
      localStorage.removeItem('cart');
      setFirstName('');
      setLastName('');
      setEmail('');
      setAddress('');
      setCity('');
      setPostalCode('');

      window.location.href = "/success";
    }
  };

  return (
    <div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form className="justify-center w-full mx-auto" method="post">
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="lastName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <input
                      className="w-full mb-3 px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="address"
                      cols="20"
                      rows="1"
                      placeholder="Address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postalCode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postalCode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => {
                        setPostalCode(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900"
                    onClick={handleCheckout}
                  >
                    Process
                  </button>
                </div>
                <ProgressBar step={3} />
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="mt-8">
                {cartItems.map((product) => (
                  <div
                    className="flex flex-col space-y-4 pb-2"
                    key={product._id}
                  >
                    <div className="flex space-x-4">
                      <div>
                        <img className="h-28 w-46" src={product.thumbnail} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{product.title}</h2>$
                        {product.price}
                        {product.quantity > 1 && ` x ${product.quantity}`}
                      </div>
                      <div>
                        <button
                          className="px-2 py-0 font-bold "
                          onClick={() => handleSubtractQuantity(product)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </h2>
              </div>

              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping:<span className="ml-2">$10</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">${cartTotal + 10}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
