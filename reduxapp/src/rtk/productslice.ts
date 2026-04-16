import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  url: string;
  name: string;
  category: string;
  price: number;
  description: string;
  alt: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice(
    {
  name: "product",
  initialState,
  reducers: {
              setProducts(state, action: PayloadAction<Product[]>) {
               state.products = action.payload;   // Immer allows mutation

               //setState(...product,action.payload)
                 },
             addProduct(state, action: PayloadAction<Product>) {
              state.products.push(action.payload);
             },
             deleteProduct(state, action: PayloadAction<number>) {
              state.products = state.products.filter(
                (p) => p.id !== action.payload
             );
             },
     },
}
);

export const { setProducts, addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
