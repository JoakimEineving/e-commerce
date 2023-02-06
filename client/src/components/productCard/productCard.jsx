import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products/getProducts');
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="flex flex-row m-3 flex-wrap"> 
      {products.length > 0
            ? products.map((product) => (
        <div key={product._id} className="m-2 shadow-xl flex-wrap">
          <figure>
            <img
              src={product.thumbnail}
              alt="Product Image"
            />
          </figure>
          <div className="card-body w-96 ">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))
      : 'No products found'}
    </div>
    
  );
};

export default ProductCard;
