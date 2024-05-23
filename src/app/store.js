import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slices/themeSlice";
import ProductsReducer from "../slices/productsSlice";

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        products: ProductsReducer
    }
});