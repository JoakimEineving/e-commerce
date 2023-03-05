import axios from "axios";
import { BASE_URL } from "../../config";

const uploadProduct = async (productData) => {
  try {
    console.log(productData);
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${BASE_URL}/admin/uploadProduct`,
      productData, {
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

export default {
  uploadProduct,
};
