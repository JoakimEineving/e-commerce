import axios from 'axios';
import { BASE_URL } from '../../config';

const uploadProduct = async (productData) => {
  try {
const res = await axios.post(`${BASE_URL}/products/upload`, productData);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  uploadProduct,
};