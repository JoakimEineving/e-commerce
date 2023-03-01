import { useState, useEffect } from 'react';
import axios from 'axios';

const useProduct = () => {
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

  return [products, handleDelete];
};

export default useProduct;