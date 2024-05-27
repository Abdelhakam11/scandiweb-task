import { configureStore } from "@reduxjs/toolkit";
import deletedProductsReducer from "./deletedProductSlice";

export const myStore = configureStore({
  reducer: {
    deletedProducts: deletedProductsReducer,
  },
});
