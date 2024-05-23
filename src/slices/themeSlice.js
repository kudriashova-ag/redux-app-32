import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    colors: ['red', 'green', 'blue'],
    value: 'red'
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;