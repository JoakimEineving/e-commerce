import axios from 'axios';
import { BASE_URL } from '../../config';


const getOrders = async () => {
  console.log(BASE_URL);
  try {
    const res = await axios.get(`${BASE_URL}/orders/getOrders`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const createOrder = async (orderData) => {
  try {
    const res = await axios.post(`${BASE_URL}/orders/createOrder`, orderData);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const deleteOrder = async (orderNumber) => {
  try {
    const res = await axios.delete(`${BASE_URL}/orders/deleteOrder/${orderNumber}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const orderPaid = async (orderNumber) => {
  try {
    const res = await axios.post(`${BASE_URL}/orders/orderPaid/${orderNumber}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const orderDelivered = async (orderNumber) => {
  try {
    const res = await axios.post(`${BASE_URL}/orders/orderDelivered/${orderNumber}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};





export default {
  getOrders,
  orderPaid,
  orderDelivered,
  createOrder,
  deleteOrder,
};