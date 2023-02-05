import Navbar from './components/navbar/navbar';
import ProductCard from './components/productCard/productCard';
import React from "react";
import './App.css'
import UploadForm from './components/uploadForm/uploadForm';

function App() {
  document.title = "E-commerce";

  return (
    <div className='app'>
    <Navbar />
    <ProductCard />
    <UploadForm />
    </div>
  )
}

export default App
