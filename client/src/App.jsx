import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Landing/LandingPage';
import AdminPage from "./pages/Admin/AdminPage";
import OrderSuccessPage from "./pages/Checkout/OrderSuccessPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import OrdersPage from "./pages/User/OrdersPage";
import PaymentPage from "./pages/Checkout/PaymentPage";
import AdminManageProducts from "./pages/Admin/AdminManagePruducts";

function App() {
  document.title = "E-commerce";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/manageproducts" element={<AdminManageProducts />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/checkout/shipping" element={<CheckoutPage />} />
        <Route path="/checkout/payment" element={<PaymentPage />} />
        <Route path="/checkout/success" element={<OrderSuccessPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App