import { configureStore } from "@reduxjs/toolkit";
import userLocationSlice from "./userLocationSlice";


const store = configureStore({
    reducer : {
        "userLocation" : userLocationSlice,
    }
})

export default store;