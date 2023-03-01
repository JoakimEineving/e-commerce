import axios from 'axios';

const getOrders = async () => {
  try {
    const res = await axios.get('http://localhost:3000/orders/getOrders');
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const createOrder = async (orderData) => {
  try {
    const res = await axios.post('http://localhost:3000/orders/createOrder', orderData);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const deleteOrder = async (orderNumber) => {
  try {
    const res = await axios.delete(`http://localhost:3000/orders/deleteOrder/${orderNumber}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const orderPaid = async (orderNumber) => {
  try {
    const res = await axios.post(`http://localhost:3000/orders/orderPaid/${orderNumber}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const orderDelivered = async (orderNumber) => {
  try {
    const res = await axios.post(`http://localhost:3000/orders/orderDelivered/${orderNumber}`);
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