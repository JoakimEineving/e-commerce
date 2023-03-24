import axios from "axios";
import { BASE_URL } from "../../config";

const uploadProduct = async (productData) => {
  try {
    console.log(productData);
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${BASE_URL}/admin/uploadProduct`,
      productData,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products/getProducts`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteProduct = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${BASE_URL}/admin/deleteProduct/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  uploadProduct,
  getProducts,
  deleteProduct,
};
