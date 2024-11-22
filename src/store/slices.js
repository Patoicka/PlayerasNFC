// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        },
    },
});

export const { setShow } = mainSlice.actions;
export default mainSlice.reducer;
