import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/products/getProducts"
        );
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/products/delete/${id}`
      );
      console.log(response.data.message);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex justify-between flex-row m-3 flex-wrap ">
      {products.length > 0
        ? products.map((product) => (
            <div key={product._id} className="m-2 shadow-xl flex-wrap ">
              <figure>
                <img src={product.thumbnail} alt="Product Image" />
              </figure>
              <div className="card-body w-96 ">
                <h2 className="card-title">
                  {product.title}
                  <button onClick={() => handleDelete(product._id)}>
                    <img
                      className="w-5"
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    />
                  </button>
                </h2>

                <p>{product.description}</p>
                <div className="card-actions justify-end">
                <p className="card-subtitle text-gray-600">
                  {`${product.price}$`}
                </p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        : "No products found"}
    </div>
  );
};

export default ProductCard;
