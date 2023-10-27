// yusuf
import { createSlice } from "@reduxjs/toolkit";

// initialState: []
// [
//     {
//         Image,
//         title,
//         price,
//     }
// ]

// addToCart({ title:  }), [].push({})
// removeItemFromCart(id), item.id !== id

export const cartSlice = createSlice({
  name: "cart",
  initialState: [{ id: 1, image: "", title: "Tess", price: "1000" }],
  reducers: {
    addToCart: (state, action) => {
      state.push({
        id: Date.now(),
        image: action.payload.image,
        title: action.payload.title,
        price: action.payload.price,
      });
    },
    removeItemFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id != action.payload.id
      );
      return {
        cart: removeItem,
      };
    },
  },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
