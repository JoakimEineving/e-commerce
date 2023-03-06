import React, { useState, useEffect } from "react";
import {
  Navbar,
  OrdersOverview,
  UploadForm,
  ProductOverview,
  UserOverview,
  AccessError,
} from "../../components/index";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const decodedToken = JSON.parse(window.atob(token.split(".")[1]));
      console.log(decodedToken);
      setIsAdmin(decodedToken.isAdmin);
    }
  }, []);

  if (!isAdmin) {
    return (
      <div>
        <Navbar />
        <AccessError />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <UploadForm />
      <ProductOverview />
      <OrdersOverview />
      <UserOverview />
    </div>
  );
};

export default AdminPage;
