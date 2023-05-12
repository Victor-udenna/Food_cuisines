import { createSlice } from "@reduxjs/toolkit";
interface myCount {
    count: number
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        likecount: 0
    },
    reducers: {
        incrementLike: (state, action) => {
            state.likecount = action.payload
        }
    }
    
})

export const {incrementLike} = counterSlice.actions;

export default counterSlice.reducer