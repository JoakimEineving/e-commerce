import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    setCartTotal(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, []);

  const clearCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter((item) => item._id !== product._id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const handleSubtractQuantity = (product) => {
    if (product.quantity > 1) {
      product.quantity--;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex((item) => item._id === product._id);
      cart[index] = product;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems([...cartItems]);
    }
  };

  const handleAddQuantity = (product) => {
    product.quantity++;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item._id === product._id);
    cart[index] = product;
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems([...cartItems]);
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cartItems);
  }, [cartItems]);

  return {
    cartItems,
    cartTotal,
    clearCart,
    handleSubtractQuantity,
    handleAddQuantity,
  };
};

export default useCart;