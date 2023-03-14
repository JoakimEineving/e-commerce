import { useState, useEffect } from "react";

export function useAdminCheck() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(window.atob(token.split(".")[1]));
      setIsAdmin(decodedToken.isAdmin);
    }
  }, []);

  return isAdmin;
}