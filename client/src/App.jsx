import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/landingPage';
import AdminPage from "./pages/adminPage/adminPage";
import Checkout from "./pages/checkout/checkout";

function App() {
  document.title = "E-commerce";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App