import { createSlice } from "@reduxjs/toolkit";
import { addProduct, allProducts } from "../thunks/productsThunks";

const initialState = {
    data: [],  // products
    loading: false,
    error: null
};

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => { 
        builder
            .addCase(allProducts.pending, (state) => {
                state.loading = true;
             })
            .addCase(allProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // action.payload - те, що повертає createAsyncThunk
             })
            .addCase(allProducts.rejected, (state) => {
                state.loading = false;
                state.error = 'Error!';
            })
    }
})

export default ProductsSlice.reducer;