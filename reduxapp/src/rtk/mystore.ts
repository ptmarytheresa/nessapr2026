import { configureStore } from "@reduxjs/toolkit";
  import productReducer from "./productslice";


export const store = configureStore({
  reducer: {
    productsarr: productReducer,
  },
});

// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
