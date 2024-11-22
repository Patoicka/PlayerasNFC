import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices";

const store = configureStore({
    reducer: {
        mainSlice: mainReducer,
    },
});

export default store;
