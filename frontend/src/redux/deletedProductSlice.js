import { createSlice } from "@reduxjs/toolkit";
import { removeItem } from "./helpersFunction";

const deletedProductsSlice = createSlice({
  name: "deletedProducts",
  initialState: { deletedProducts: [] },
  reducers: {
    addToDeletedProducts(state, action) {
      const filterProducts = removeItem(state.deletedProducts, action.payload);
      state.deletedProducts = [...filterProducts, action.payload];
    },
    removeFromDeletedProducts(state, action) {
      state.deletedProducts = removeItem(state.deletedProducts, action.payload);
    },
  },
});
export const { addToDeletedProducts, removeFromDeletedProducts } =
  deletedProductsSlice.actions;
export default deletedProductsSlice.reducer;
