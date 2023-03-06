import { useState, useEffect } from "react";

const useAlert = () => {
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const hideAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      hideAlert();
    }, 2500);
    return () => clearTimeout(timer);
  }, [alertMessage, alertType]);

  return [alertType, alertMessage, showAlert];
};

export default useAlert;