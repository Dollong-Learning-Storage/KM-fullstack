import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import detailReducer from "./detailSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    detail: detailReducer,
    // cart
    // detail
  },
});
