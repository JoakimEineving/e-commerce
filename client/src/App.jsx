import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/landingPage';
import Navbar from "./components/navbar/navbar";

import AdminPage from "./pages/adminPage/adminPage";

function App() {
  document.title = "E-commerce";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App