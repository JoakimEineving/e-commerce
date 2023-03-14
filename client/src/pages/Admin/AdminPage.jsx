import React, { useState, useEffect } from "react";
import {
  Navbar,
  OrdersOverview,
  UploadForm,
  ProductOverview,
  UserOverview,
  AccessError,
} from "../../components/index";
import { useAdminCheck } from "../../hooks/useAdminCheck";

const AdminPage = () => {
  const isAdmin = useAdminCheck();
  
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
