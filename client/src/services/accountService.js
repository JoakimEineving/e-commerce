import axios from "axios";
import { BASE_URL } from "../../config";

const getAccounts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/accounts/getAccounts`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const signUp = async (accountData) => {
  try {
    const res = await axios.post(`${BASE_URL}/accounts/signUp`, accountData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteAccount = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/accounts/deleteAccount/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const signIn = async (accountData) => {
  try {
    const res = await axios.post(`${BASE_URL}/accounts/signIn`, accountData);
    if (res.data && res.data._id) {
      localStorage.setItem("userId", res.data._id);
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  getAccounts,
  signUp,
  deleteAccount,
  signIn,
};
