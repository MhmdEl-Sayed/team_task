import { configureStore } from '@reduxjs/toolkit'
import cartreducer from "./createSlice"
export const store = configureStore({
  reducer: {

    cart: cartreducer
  },
})