import axios from 'axios';

const uploadProduct = async (productData) => {
  try {
    const res = await axios.post('http://localhost:3000/products/upload', productData);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  uploadProduct,
};