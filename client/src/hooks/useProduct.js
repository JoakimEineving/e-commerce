import { useState, useEffect } from 'react';
import productsService from '../services/productsService';

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await productsService.getProducts();
        console.log(res);
        setProducts(res);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
    
  }, []);

  const deleteProduct = async (id) => {
    try {
      const res = await productsService.deleteProduct(id);
      console.log(res.message);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return [products, deleteProduct];
};

export default useProduct;