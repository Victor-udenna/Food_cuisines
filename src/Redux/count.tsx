import { createSlice } from "@reduxjs/toolkit";
interface myCount {
    count: number
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incrementLike: (state, action) => {
            state.count = action.payload
        }
    }
    
})

export const {incrementLike} = counterSlice.actions;

export default counterSlice.reducer