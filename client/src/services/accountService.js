import axios from "axios";
import { BASE_URL } from "../../config";

const signIn = async (accountData) => {
  try {
    const res = await axios.post(`${BASE_URL}/accounts/signIn`, accountData, 
    );
    if (res.data && res.data._id) {
      localStorage.setItem("token", res.data.token);
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
const signUp = async (accountData) => {
  try {
    const res = await axios.post(`${BASE_URL}/accounts/signUp`, accountData,);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const getAccounts = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${BASE_URL}/admin/getAccounts`, {
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

const deleteAccount = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${BASE_URL}/admin/deleteAccount/${id}`, {
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
  getAccounts,
  signUp,
  deleteAccount,
  signIn,
};
