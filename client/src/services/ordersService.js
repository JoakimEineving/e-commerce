import axios from "axios";
import { BASE_URL } from "../../config";

const createOrder = async (orderData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${BASE_URL}/orders/createOrder`, orderData, {
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
const getOrders = async () => {
  console.log(BASE_URL);
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${BASE_URL}/admin/getOrders`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getOrdersByUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${BASE_URL}/orders/getOrdersByUser`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


const deleteOrder = async (orderNumber) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(
      `${BASE_URL}/admin/deleteOrder/${orderNumber}`,
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

const orderPaid = async (orderNumber) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${BASE_URL}/admin/orderPaid/${orderNumber}`,
      null,
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

const orderDelivered = async (orderNumber) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${BASE_URL}/admin/orderDelivered/${orderNumber}`,
      null,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    console.log(error);
    return null;
  }
};

export default {
  getOrders,
  orderPaid,
  orderDelivered,
  createOrder,
  deleteOrder,
  getOrdersByUser,
};
