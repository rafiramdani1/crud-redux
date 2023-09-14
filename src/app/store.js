import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../app/features/productSlice'

export const store = configureStore({
  reducer: {
    product: productReducer
  }
})