import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        state.splice(state.indexOf(item), 1);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    updateQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    subtractQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(state));
      } else if (item && item.quantity === 1) {
        state.splice(state.indexOf(item), 1);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    addQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.splice(0, state.length);
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  subtractQuantity,
  addQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
