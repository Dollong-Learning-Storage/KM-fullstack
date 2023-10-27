import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import detailReducer from "./detailSlice";
import { fakeStoreApi } from "./services/fakeStore";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    detail: detailReducer,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
