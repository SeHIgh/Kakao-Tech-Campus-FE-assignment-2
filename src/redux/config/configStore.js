import { configureStore } from "@reduxjs/toolkit";
import dexReducer from "../slices/dexSlice";

const store = configureStore({
    reducer: {
        dex: dexReducer,
    },
});

export default store;
