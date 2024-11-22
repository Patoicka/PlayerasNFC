// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    ticket: 0,
    page: '',
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        },
        setTicket: (state, action) => {
            state.ticket = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const { setShow, setTicket, setPage } = mainSlice.actions;
export default mainSlice.reducer;
