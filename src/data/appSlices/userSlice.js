import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        name: String,
        imageUrl: String,
        role: String, 
    }
}

export const userSlice  = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value =  {...action.payload}
        }
    }
})