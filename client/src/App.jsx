import Navbar from './components/navbar/navbar';
import ProductCard from './components/productCard/productCard';
import React from "react";
import './App.css'

function App() {
  document.title = "E-commerce";

  return (
    <div className='app'>
    <Navbar />
    <ProductCard />
    </div>
  )
}

export default App
