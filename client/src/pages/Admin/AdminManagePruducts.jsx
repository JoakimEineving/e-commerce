import React from "react";
import {
  Navbar,
  UploadForm,
  ProductOverview,
  AccessError,
} from "../../components/index";
import { useAdminCheck } from "../../hooks/useAdminCheck";

const AdminManageProducts = () => {
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
    </div>
  );
};

export default AdminManageProducts;
