import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
            `${BASE_URL}/products/getProducts`
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
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${BASE_URL}/admin/deleteProduct/${id}`,{
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(res.data.message);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return [products, handleDelete];
};

export default useProduct;