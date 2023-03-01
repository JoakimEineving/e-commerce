import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
  const cartItems = useSelector(state => state.cart);
  const cartItemsNum = cartItems.length;
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="sticky top-0 z-50 navbar bg-base-200 shadow-md">
      <div className="flex-1">
      <Link to="/">
        <span className="btn btn-ghost normal-case text-xl">E-com store</span>
      </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{cartItemsNum}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{cartItemsNum} {cartItemsNum === 1 ? 'item' : 'items'}</span>
              <span className="text-info">Subtotal: ${cartTotal}</span>
              <div className="card-actions">
              <Link to="/checkout">
                <button className="btn btn-primary btn-block">View cart</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/admin">
            <span className="justify-between">
              Admin Panel
              <span className="badge ml-2">New</span>
            </span>
          </Link>
            </li>
            <li>
              <span>Settings</span>
            </li>
            <li>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
