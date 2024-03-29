import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./count";

export default configureStore({
    reducer: {
        likecount: counterReducer,
    }
})